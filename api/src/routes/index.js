import userRoutes from './user';

const configureRoutes = (server) => server.route([
  ...userRoutes,
]);
export default configureRoutes;
