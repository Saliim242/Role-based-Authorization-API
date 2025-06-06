import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
  //   const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, 10);
};

export const comparePassword = async (password, hashPassword) => {
  return await bcrypt.compare(password, hashPassword);
};
