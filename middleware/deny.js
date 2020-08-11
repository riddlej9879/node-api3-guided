module.exports = () => {
  return (req, res, next) => {
    const agent = req.headers["user-agent"];

    if (/postman/.test(agent)) {
      // the client is Insomnia, deny them access
      return res.status(418).json({ message: "No insomnia allowed here" });
    }
    // otherwise, let them through
    next();
  };
};
