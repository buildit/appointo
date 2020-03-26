import Boom from '@hapi/boom';
import { getOneUser } from '../../utils/dbOps';

const getUsers = {
  path: '/users/{id}',
  method: 'GET',
  config: {
    auth: 'jwt',
  },
  handler: async (request) => {
    const { id } = request.params;
    try {
      const user = await getOneUser(id);
      return ({
        user,
      });
    } catch (err) {
      throw Boom.badRequest(err);
    }
  },
};

export default getUsers;
