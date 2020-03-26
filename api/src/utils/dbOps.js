import bcrypt from 'bcryptjs';
import User from '../models/User';

const hashPassword = async (password) => bcrypt.hash(password, 8);

const checkPassword = async (passwordToCheck, passwordExisting) => bcrypt
  .compare(passwordToCheck, passwordExisting);

export const createUser = async (username, email, password, isAdmin) => {
  // TODO joi validation
  const user = new User();
  user.username = username;
  user.email = email;
  user.isAdmin = isAdmin;
  user.password = await hashPassword(password);
  return user.save();
};

export const verifyUser = async (username, email, password) => {
  console.log();
  return new Promise((resolve, reject) => User.findOne(
    { $or: [{ email }, { username }] }, async (err, user) => {
      if (err) {
        reject(err);
      } else {
        console.log('Inside verifyUser', user);
        if (!user) {
          reject(new Error('Incorrect username or email!'));
        } else {
          const isValid = await checkPassword(password, user.password);
          if (isValid) {
            resolve(user);
          } else {
            reject(new Error('Incorrect username or email!'));
          }
        }
      }
    },
  ));
};

export const updateUser = (id, userToUpdate) => {
  console.log();
  return new Promise((resolve, reject) => {
    User.findOneAndUpdate({ _id: id }, userToUpdate, (err, user) => {
      if (err) {
        reject(err);
      }
      if (!user) {
        reject(new Error('User not found!'));
      }
      resolve(user);
    });
  });
};

export const getAllUsers = () => {
  console.log();
  return new Promise((resolve, reject) => {
    User.find().select('-password -__v').exec((err, users) => {
      if (err) {
        reject(err);
      } else {
        resolve(users);
      }
    });
  });
};

export const getOneUser = (id) => {
  console.log();
  return new Promise((resolve, reject) => {
    User.findById(id).select('-password -__v').exec((err, user) => {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    });
  });
};

export const deleteUser = (id) => {
  console.log();
  return new Promise((resolve, reject) => {
    User.findByIdAndDelete(id, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};
