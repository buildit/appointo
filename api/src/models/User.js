import mongoose from 'mongoose';

const { Schema } = mongoose;

const userModel = new Schema({
  email: { type: String, required: true, index: { unique: true } },
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true },
});

export default mongoose.model('User', userModel);
