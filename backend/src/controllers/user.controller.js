import { UserModel } from "../models/user.model";

export async function getAllUser(req, res) {
  try {
    const Users = await UserModel.find({});
    res.status(200).json({ message: "user fetch successfully!", data: Users });
  } catch (err) {
    res.status(500).json({ message: "User fetch failed" });
  }
}
export async function deleteUser(req, res) {
  try {
    const User= await UserModel.findOneAndDelete({username:req.body.username});
    if(!User) return res.status(404).json({message:"user not found"})
    res.status(200).json({ message: "user deleted successfully!"});
  } catch (err) {
    res.status(500).json({ message: "User deletion failed" });
  }
}
export async function getUserByUserId(req, res) {
  try {
    const User= await UserModel.findById({})
    if(!User) return res.status(404).json({message:"user not found"})
    res.status(200).json({ message: "user deleted successfully!"});
  } catch (err) {
    res.status(500).json({ message: "User deletion failed" });
  }
}
