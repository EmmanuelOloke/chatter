import mongoose, { mongo } from 'mongoose';

const { MONGODB_URI } = process.env;
let connection: typeof mongoose;

if (!MONGODB_URI) {
  throw new Error('Invalid environment variable: MONGODB_URI');
}

export const connectToMongoDB = async () => {
  if (!connection) connection = await mongoose.connect(MONGODB_URI);
  return connection;
};
