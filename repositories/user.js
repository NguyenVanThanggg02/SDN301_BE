import Users from "../models/users.js";

const create = async ({ username, password }) => {
  try {
    const newUser = await Users.create({ username, password });
    return newUser._doc;
  } catch (error) {
    throw new Error(error.toString());
  }
};

const fetchAll = async () => {
  try {
    return await Users.find({}).exec();
  } catch (error) {
    throw new Error(error.toString());
  }
};




const getUserByUsername = async (username) => {
  try {
    return await Users.findOne({ username: username }).exec();
  } catch (error) {
    throw new Error(error.toString());
  }
};

const getUserById = async (id) => { 
  try { 
    return await Users.findOne({ _id: id }).exec();

  } catch (error) { 
      throw new Error(error.toString()); 
  } 
} 


const updateUser = async (username, userData) => {
  try {
    return await Users.findOneAndUpdate(
      { username: username },
      userData,
      { new: true }
    );
  } catch (error) {
    throw new Error(error.toString());
  }
};
const deleteUser = async (id) => {
  try {
    const deleteUser = await Users.findByIdAndDelete({ _id: id }).exec();
    return deleteUser._doc;
  } catch (error) {
    throw new Error(error.toSring());
  }
};

export default {
  create,
  fetchAll,
  getUserByUsername,
  updateUser,
  deleteUser,
  getUserById
};
