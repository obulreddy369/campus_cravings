import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  try {
    const { name, username, email, phone, password } = req.body;
    if (!name || !username || !email || !phone || !password) {
      return res
        .status(400)
        .json({ message: "Please fill all the fields", success: false });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }

    const hashedPassword = await bcryptjs.hash(password, 16);
    const user = await User.create({
      name,
      username,
      email,
      phone,
      password: hashedPassword
    });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );

    return res
      .status(201)
      .cookie("token", token, { expiresIn: "1d", httpOnly: true })
      .json({
        message: "Account created successfully",
        success: true,
        token,
        user: {
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
        },
      });
  } catch (error) {
    console.log("Register Error:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
};


export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "User not found",
        success: false,
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
        success: false,
      });
    }

    const token = jwt.sign({ id: user._id,email:user.email}, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    return res
      .status(201)
      .cookie("token", token, { expiresIn: "1d", httpOnly: true })
      .json({
        message: `Login successful ${user.name}`,
        success: true,
        token, 
        user: { 
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
        }
      });
  } catch (error) {
    console.log(error);
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("Get Profile Error:", error);
    res.status(401).json({ message: "Unauthorized", success: false });
  }
};


export const logout = (req, res) => {
  return res.cookie("token", "", { expires: new Date(Date.now()) }).json({
    message: "User logged out successfully.",
    success: true,
  });
};

export const updateUserProfile = async (req, res) => {
  try {
    const { name, username, email, phone } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { name, username, email, phone },
      { new: true, runValidators: true }
    ).select("-password");

    res.status(200).json({
      message: "Profile updated successfully",
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    console.error("Update Profile Error:", error.message);
    res.status(500).json({ message: "Server error", success: false });
  }
};