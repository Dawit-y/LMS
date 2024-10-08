export const requireAuth = (req, res, next) => {
  if (req.session && req.session.userId) {
    next();
  } else {
    res.status(401).send({ message: "Unauthorized, please log in" });
  }
};
