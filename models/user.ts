import { Model, Schema, model, models } from 'mongoose';
import { Document } from 'mongoose';
import bycrypt from 'bcrypt';

interface UserDocument extends Document {
  firstName: string;
  lastName: string;
  role: 'Writer' | 'Reader';
  email: string;
  password: string;
  tokens: string[];
}

interface Methods {
  comparePassword(passwords: string): Promise<boolean>;
}

const UserSchema = new Schema<UserDocument, {}, Methods>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    minLength: [2, 'First name should be at least 2 characters'],
    maxLength: [30, 'First name should be less than 30 characters'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    minLength: [2, 'Last name should be at least 2 characters'],
    maxLength: [30, 'Last name should be less than 30 characters'],
    trim: true,
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
    enum: ['Writer', 'Reader'],
    default: 'Writer',
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    select: false,
  },
});

// Hash the password
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bycrypt.genSalt(12);
    this.password = await bycrypt.hash(this.password, salt);
    next();
  } catch (error) {
    throw error;
  }
});

// Compare password method
UserSchema.methods.comparePassword = async function (password) {
  try {
    return await bycrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

const User = models.User || model('User', UserSchema);

export default User as Model<UserDocument, {}, Methods>;
