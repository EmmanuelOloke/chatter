import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/user';
import jwt from 'jsonwebtoken';

passport.use(
  'google',
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: 'http://localhost:3000/api/auth/callback/google',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        if (!profile.emails) {
          return console.log('error'); // TODO: add proper error handling
        }

        const obj = await User.findOne({ email: profile.emails[0].value });
        if (!obj) {
          // Create new user
          const newUser = new User({
            firstName: profile.displayName,
            lastName: profile.displayName,
            role: 'Writer',
            email: profile.emails[0].value,
            password: 'dummypassword',
            accessToken,
          });
          await newUser.save();
          const token = await jwt.sign(
            { id: newUser._id, created: Date.now().toString() },
            process.env.JWT_SECRET as any
          );
          newUser.tokens.push(token);
          await newUser.save();
          done(null, newUser, { message: 'Authentication Successful', token });
        } else {
          // User exists, then sign in
          const token = await jwt.sign(
            { id: obj._id, created: Date.now().toString() },
            process.env.JWT_SECRET as any
          );
          obj.tokens.push(token);
          await obj.save();
          done(null, obj, { message: 'Authentication Successful', token });
        }
      } catch (error: any) {
        console.error(error);
        done(error, false, { message: 'Internal Server Error.' });
      }
    }
  )
);
