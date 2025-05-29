import User from "../models/user.model.js";
import { hashPassword, comparePassword } from "../utils/password.hash.util.js";
import jwt from "jsonwebtoken";

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
  try {
    const { username, password } = req.body;

    // check if the username and password is passed or not
    if (!username || !password) {
      return res.status(400).json({
        status: false,
        message: "Username and password are required",
      });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({
        status: false,
        message: "User not found",
      });
    }

    const isPasswordMatched = await comparePassword(password, user.password);

    if (!isPasswordMatched) {
      return res.status(400).json({
        status: false,
        message: "Incorrect password",
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      status: true,
      message: "User logged in successfully",
      data: {
        // ...user._doc,
        // password: undefined,
        token,
      },
    });
  } catch (error) {
    console.log(error).red.bold;
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// get All User

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();

    if (!users) {
      return res.status(400).json({
        status: false,
        message: "Users not found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    console.log(error).red.bold;
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
