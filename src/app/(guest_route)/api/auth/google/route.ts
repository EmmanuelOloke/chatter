import passport from 'passport';
import { connectToMongoDB } from '../../../../../../lib/mongodb';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import '../../../../../../lib/passport';

// eslint-disable-next-line import/no-anonymous-default-export
export async function GET(req: NextApiRequest, res: NextApiResponse, nextFunction: NextApiHandler) {
  await connectToMongoDB();
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false,
  })(req, res, nextFunction);
}
