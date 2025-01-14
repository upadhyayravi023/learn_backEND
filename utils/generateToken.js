const jwt = require('jsonwebtoken');

/**
 * Generate a JWT for a user.
 * @param {Object} user - The user object.
 * @param {string} user.email - User's email.
 * @param {string} user._id - User's ID.
 * @returns {string} JWT token.
 */
const generateToken = (user) => {
  if ( !user.email || !user._id) {
    throw new Error('Invalid user object for token generation');
  }

  const payload = {
    email: user.email,
    id: user._id,
  };

  const options = {
    expiresIn: '1h', 
  };

  const token = jwt.sign(payload, process.env.JWT_KEY, options);
  return token;
};

module.exports.generateToken = generateToken;
