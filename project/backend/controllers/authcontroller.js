import express from "express";
import fs from "fs";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import User from "../schema/user.js";
import sendMail from "./mailcontroller.js";
import cookieParser from "cookie-parser";
dotenv.config();


const authcontroller = express();
authcontroller.use(cookieParser());

//To DO: Add profile picture upload functionality
//To DO: Add email verification functionality
//To DO: Add password reset functionality

authcontroller.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    const savedUser = await newUser.save();
    if (!savedUser) {
      return res.status(500).json({ message: "Error saving user" });
    }
    res.status(201).json({ message: "User registered successfully" });
    const mailOptions = {
      to: email,
      subject: "Registration Notification",
      text: `Hello ${name},\n\nYou have successfully registered to your account.\n\nBest regards,\nYour Company`,
    };
    await sendMail(mailOptions);  
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
});

authcontroller.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
    );

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    };  

    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      }
    });

    const mailOptions = {
      to: user.email,
      subject: "Login Notification",
      text: `Hello ${user.name},\n\nYou have successfully logged in to your account.\n\nIf this wasn't you, please contact support immediately.\n\nBest regards,\nYour Company`,
    };
    await sendMail(mailOptions);

  } catch (error) {
    res.status(500).json({ message: "Error logging in user" });
  }
});

authcontroller.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logout successful" });
});

authcontroller.get("/profile", async (req, res) => {
    try {
    const token = req.cookies.token || (req.headers["authorization"] && req.headers["authorization"].split(" ")[1]);

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }   
    res.status(200).json({
        id: user._id,
        name: user.name,
        email: user.email,
    });
    } catch (error) {
    res.status(500).json({ message: "Error getting user profile" });
    }
});

const verifyToken = (req, res, next) => {
  const authcontrollerHeader = req.headers["authorization"];
  if (!authcontrollerHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = authcontrollerHeader && authcontrollerHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden" });
    }
    req.user = user;
    next();
  });
};

authcontroller.get("/users", verifyToken, async (req, res) => {
  try {
    const users = await User.find({}, "name email");
    if (!users) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error getting users" });
  }
});

authcontroller.put("/profile", async (req, res) => {
  try {
    const token = req.cookies.token || (req.headers["authorization"] && req.headers["authorization"].split(" ")[1]);
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;
    
    await user.save();
    
    res.status(200).json({
      message: "Profile updated successfully",
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default authcontroller;
