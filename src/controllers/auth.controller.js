import User from "../models/user.model.js";
import { hashPassword } from "../utils/password.hash.util.js";

export const register = async (req, res) => {
  try {
    const { fullName, username, email, password, role } = req.body;

    if (!fullName || !username || !email || !password || !role) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    const isUsernameExists = await User.findOne({ username });
    if (isUsernameExists) {
      res.status(400).json({
        status: false,
        message: `Username ${username} already exists`,
      });
    }

    const isEmailExists = await User.findOne({ email });
    if (isEmailExists) {
      res
        .status(400)
        .json({ status: false, message: `Email ${email} already exists` });
    }

    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      fullName,
      username,
      email,
      password: hashedPassword,
      role,
    });

    if (!user) {
      return res.status(400).json({
        status: false,
        message: "User registration failed",
      });
    }

    res.status(200).json({
      status: true,
      message: "User registered successfully",
      data: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  res.status(200).json({ status: true, message: "User login Successfully" });
};
