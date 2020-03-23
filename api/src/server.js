
import Hapi from '@hapi/hapi';
import hapiAuthJwt2 from 'hapi-auth-jwt2';
import mongoose from 'mongoose';
import configureRoutes from './routes';
import secret from './config';

const dbUrl = 'mongodb://localhost:27017/appointoDB';

// TODO: take list of users from DB and use it in validate function
// Check if user exists in db.
const validate = async () => (
  { isValid: true }
  // // do your checks to see if the person is valid
  // if (!people[decoded.id]) {
  //   return { isValid: false };
  // }
  // else {
  //   return { isValid: true };
  // }
);

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });
  await server.register(hapiAuthJwt2);
  server.auth.strategy('jwt', 'jwt', {
    key: secret, // TODO: use encoded secret key
    validate, // validate function defined above
  });
  server.auth.default('jwt');
  await configureRoutes(server);

  await server.start();
  // Once started, connect to Mongo through Mongoose
  await mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', () => console.log('connection error:'));
  db.on('open', () => {
    console.log('Server is connected to DB');
  });
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
