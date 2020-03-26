import createUser from './createUser';
import loginUser from './loginUser';
import updateUser from './updateUser';
import getUsers from './getUsers';
import getUser from './getUser';
import removeUser from './removeUser';

const userRoutes = [
  createUser,
  loginUser,
  updateUser,
  getUsers,
  getUser,
  removeUser,
];

export default userRoutes;
