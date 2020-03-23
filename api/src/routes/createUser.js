import createUser from '../utils/dbOps';
import createToken from '../utils/token';

const postUser = {
  path: '/users/register',
  method: 'POST',
  config: {
    auth: false,
  },
  handler: async (request) => {
    const {
      username, password, email, isAdmin,
    } = request.payload;
    const user = await createUser(username, password, email, isAdmin);
    return {
      id_token: createToken(user),
    };
  },
};

export default postUser;
