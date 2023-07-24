import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { connectToMongoDB } from '../../../../../../lib/mongodb';
import passport from 'passport';
import { setCookie } from 'cookies-next';
import '../../../../../../lib/passport';

export async function GET(req: NextApiRequest, res: NextApiResponse, next: NextApiHandler) {
  await connectToMongoDB();
  passport.authenticate('google', (err: any, user: any, info: any) => {
    if (err || !user) res.redirect('http://localhost:3000?a=auth_fail');

    setCookie('token', info.token, { req, res });
    res.redirect('http://localhost:3000/feed');
  })(req, res, next(req, res));
}
