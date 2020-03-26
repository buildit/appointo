import Boom from '@hapi/boom';
import { updateUser } from '../../utils/dbOps';

const putUser = {
  path: '/users/{id}',
  method: 'PUT',
  config: {
    auth: 'jwt',
  },
  handler: async (request) => {
    const { id } = request.params;
    try {
      await updateUser(id, request.payload);
      return ({
        message: 'User updated',
      });
    } catch (err) {
      throw Boom.badRequest(err);
    }
  },
};

export default putUser;
