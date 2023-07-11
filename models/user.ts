import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    minLength: [2, 'First name should be at least 2 characters'],
    maxLength: [30, 'First name should be less than 30 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    minLength: [2, 'Last name should be at least 2 characters'],
    maxLength: [30, 'Last name should be less than 30 characters'],
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
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
  confirmPassword: {
    type: String,
    required: [true, 'Confirm password is required'],
    select: false,
  },
});

const User = models.User || model('User', UserSchema);

export default User;
