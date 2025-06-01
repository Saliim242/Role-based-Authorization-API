export const AuthRoleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        status: false,
        message: "Unauthorized access to this resource denied.",
      });
    }
    next();
  };
};
