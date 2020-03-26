import Boom from '@hapi/boom';
import { deleteUser } from '../../utils/dbOps';

const removeUser = {
  path: '/users/{id}',
  method: 'DELETE',
  config: {
    auth: 'jwt',
  },
  handler: async (request) => {
    const { id } = request.params;
    try {
      await deleteUser(id, request.payload);
      return ({
        message: 'User Deleted',
      });
    } catch (err) {
      throw Boom.badRequest(err);
    }
  },
};

export default removeUser;
