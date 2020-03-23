import createUser from './createUser';

const configureRoutes = (server) => server.route([
  createUser,
]);
export default configureRoutes;
