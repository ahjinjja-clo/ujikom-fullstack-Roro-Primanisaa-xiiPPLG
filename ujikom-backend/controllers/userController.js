import * as UserModel from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const { user_id, name, phone_number, email, password, user_type } = req.body;
    const result = await UserModel.createdUser(user_id, name, phone_number, email, password, user_type);
    res.status(201).json({ msg: "user created", result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.getAllUsers();
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async(req, res) => {
  try {
    const {id} = req.params;
    const user = await UserModel.getUserById(id);
    if(user.length === 0){
      return res.status(404).json({message: "User not found"});
    }

    res.status(200).json(user[0]);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export const updateUser = async (req,res) => {
  try {
    const {user_id} = req.params;
    const {name, phone_number, email, password} = req.body;

    const result = await UserModel.updateUser(user_id, name, phone_number, email, password);
    if(result.affectedRows === 0){
      return res.status(404).json({message: "User Not Found"});
    }

    res.status(200).json({message: "User Updated", result});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

export const deleteUser = async(req,res) => {
  try {
    const {id} = req.params;
    const result = await UserModel.deleteUser(id);
    if(result.affectedRows === 0){
      return res.status(404).json({message: "User Not Found"})
    }
    res.status(200).json({message: "User Has Been Deleted", result})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}
