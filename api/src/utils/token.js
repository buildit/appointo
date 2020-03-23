import jwt from 'jsonwebtoken';
import secret from '../config';

const createToken = (user) => {
  let scopes;
  // Check if the user object passed in
  // has admin set to true, and if so, set
  // scopes to admin
  if (user.admin) {
    scopes = 'admin';
  }
  // Sign the JWT
  return jwt.sign({
    id: user._id,
    username: user.username,
    scope: scopes,
  }, secret, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
};
export default createToken;
