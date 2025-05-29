export const admin = (req, res) => {
  res.status(200).json({
    status: true,
    message: "Admin",
  });
};

export const manager = (req, res) => {
  res.status(200).json({
    status: true,
    message: "Manager",
  });
};

export const user = (req, res) => {
  res.status(200).json({
    status: true,
    message: "User",
  });
};
