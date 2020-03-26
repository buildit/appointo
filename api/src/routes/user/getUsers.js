import Boom from '@hapi/boom';
import { getAllUsers } from '../../utils/dbOps';

const getUsers = {
  path: '/users',
  method: 'GET',
  config: {
    auth: 'jwt',
  },
  handler: async () => {
    try {
      const users = await getAllUsers();
      return ({
        users,
      });
    } catch (err) {
      throw Boom.badRequest(err);
    }
  },
};

export default getUsers;
