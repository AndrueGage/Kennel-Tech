import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

const AuthenticationError = new GraphQLError('Could not authenticate user.', {
  extensions: {
    code: 'UNAUTHENTICATED',
  },
});

const authMiddleware = ({ req }) => {
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return req;
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log('Invalid token');
  }

  return req;
};

const signToken = ({ email, name, _id }) => {
  const payload = { email, name, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

export { AuthenticationError, authMiddleware, signToken };
