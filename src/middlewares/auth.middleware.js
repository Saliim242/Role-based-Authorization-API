import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        status: false,
        message: "No token, authorization denied",
      });
    }

    try {
      console.log(token);
      const decodedUser = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decodedUser;
      console.log(req.user);

      return next(); // ✅ Add return here to prevent further execution
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: false,
        message: error.message,
      });
    }
  }

  // This line should only run if no valid Bearer token was found
  return res.status(401).json({
    status: false,
    message: "No token, authorization denied",
  });
};
