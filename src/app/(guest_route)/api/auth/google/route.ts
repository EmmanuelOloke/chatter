import passport from 'passport';
import { connectToMongoDB } from '../../../../../../lib/mongodb';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import '../../../../../../lib/passport';

export async function GET(req: NextApiRequest, res: NextApiResponse, next: NextApiHandler) {
  await connectToMongoDB();
  console.log('is it here??');
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false,
  })(req, res, next(req, res));
}
