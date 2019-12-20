/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);

  if (authorization) {
    const secret = process.env.JWT_SECRET || "Death Star Plans Secured";

    jwt.verify(authorization, secret, function(error, decodedToken) {
      if (error) {
        res.status(401).json({ message: "Invalid Token" });
      } else {
        req.token = decodedToken;
        
        next();
      }
    });
  } else {
    res.status(400).json({ message: "Please login and try again" });
  }
};
