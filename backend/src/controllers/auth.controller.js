import { UserModel } from "../models/user.model.js";

export async function register(req, res) {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    if (!username || !password) {
      return res.status(400).send("Username and passwd is required");
    }
    const existUser = await UserModel.findOne({ username });
    if (existUser) return res.status(409).send("User Already Exist");
    const User = await UserModel.create({ username, password });
    res.status(201).json({ message: "created new user!", data: User });
  } catch (err) {
    res.status(500).json({ message: "Register failed" });
    console.log(err);
  }
}

export async function login(req, res) {
  const { username, password } = req.body;
  try {
    const existUser = await UserModel.findOne({ username });
    if (!existUser) return res.status(404).json("User Doesn't Exist");
    if (existUser.password !== password) {
      return res.status(400).json({ message: "password doesn't match" });
    }
    res.status(200).json({ message: "user login success!", data: existUser });
  } catch (err) {
    res.json({ message: "login failed", status: 500 });
  }
}

