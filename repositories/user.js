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

//R:Fetch all  new Product by Id

// const fetchAllProductById = async (id) => {
//     try {
//         const allProducts = await Products.find({ _id: id }).exec();
//         return allProducts.map(product => product._doc);
//     } catch (error) {
//         throw new Error(error.toString());
//     }
// }
const getUserByUsername = async (username) => {
  try {
    return await Users.findOne({ username: username }).exec();
  } catch (error) {
    throw new Error(error.toString());
  }
};
const updateUser = async (
  id,
  { full_name, username, Email, password, gender, birthday, phone, address }
) => {
  try {
    return await Users.findByIdAndUpdate(
      { _id: id },
      {
        full_name,
        username,
        Email,
        password,
        gender,
        birthday,
        phone,
        address,
      },
      { new: true }
    );
  } catch (error) {
    throw new Error(error.toSring());
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
};
