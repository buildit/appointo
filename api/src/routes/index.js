import createUser from './createUser';
import loginUser from './loginUser';
import updateUser from './updateUser';

const configureRoutes = (server) => server.route([
  createUser,
  loginUser,
  updateUser,
]);
export default configureRoutes;
