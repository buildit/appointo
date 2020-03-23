import bcrypt from 'bcryptjs';
import User from '../models/User';

const hashPassword = async (password) => bcrypt.hash(password, 8);

export const createUser = async (username, email, password, isAdmin) => {
  // TODO joi validation
  const user = new User();
  user.username = username;
  user.email = email;
  user.isAdmin = isAdmin;
  user.password = await hashPassword(password);
  console.log('inside dbOps', user);
  return user.save();
};
