const configureRoutes = (server) => server.route([{
  method: 'GET',
  path: '/',
  handler: () => 'Hello World!',
}, {
  path: '/appointments',
  method: 'GET',
  handler: () => 'GET Appointments',
}]);
export default configureRoutes;
