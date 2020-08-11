const users = require("../users/users-model");

function checkUserID() {
  return (req, res, next) => {
    users
      .findById(req.params.id)
      .then((user) => {
        if (user) {
          // attach the user data to the request
          // so we can access it later
          req.user = user;
          next();
        } else {
          res.status(404).json({
            message: "User not found",
          });
        }
      })
      .catch(next);
  };
}

function checkUserData() {
  return (req, res, next) => {
    if (!req.body.name || !req.body.email) {
      return res.status(400).json({
        message: "Missing user name or email",
      });
    }

    next();
  };
}

module.exports = {
  checkUserID,
  checkUserData,
};
