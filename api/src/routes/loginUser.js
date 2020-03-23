import Boom from '@hapi/boom';
import { verifyUser } from '../utils/dbOps';
import createToken from '../utils/token';

const postUser = {
  path: '/users/login',
  method: 'POST',
  config: {
    auth: false,
  },
  handler: async (request) => {
    const {
      username, email, password,
    } = request.payload;
    try {
      const user = await verifyUser(username, email, password);
      return {
        id_token: createToken(user),
        user: {
          id: user._id,
          email: user.email,
          username: user.username,
        },
      };
    } catch (err) {
      throw Boom.badRequest(err);
    }
  },
};

export default postUser;
