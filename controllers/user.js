// controllers/authController.js

import { userDAO } from "../repositories/index.js";

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Lấy người dùng từ cơ sở dữ liệu dựa trên tên người dùng
    const user = await userDAO.getUserByUsername(username);
    // Kiểm tra nếu người dùng tồn tại
    if (!user) {
      return res.status(401).json({ message: "Username is incorrect" });
    }

    // So sánh mật khẩu được cung cấp với mật khẩu đã được băm
    // const isPasswordValid = await bcrypt.compare(password, user.password);
    // console.log(password);
    if (password !== user.password) {
      return res.status(401).json({ message: "Password is incorrect" });
    }

    // Đăng nhập thành công, trả về thông tin người dùng hoặc token
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

// Fetch all products
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userDAO.fetchAll();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({
      error: error.toString(),
    });
  }
};

const getUserByUsername = async (req, res) => {
  try {
    const username = await userDAO.getUserByUsername(req.params.username);
    res.status(200).json(username);
  } catch (error) {
    res.status(500).json({
      error: error.toString(),
    });
  }
};
const fetchUserById = async (req, res) => {
  try {
    const userId = await userDAO.getUserById(req.params.id); 
    res.status(200).json(userId);
  } catch (error) {
    res.status(500).json({
      error: error.toString(),
    });
  }
};

// Create a new product
const createUser = async (req, res) => {
  // Lấy dữ liệu từ yêu cầu
  try {
    const { username, password } = req.body;
    const result = await userDAO.create({ username, password });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.toString(),
    });
  }
};

const updateUser = async (req, res) => {
  try {
    res.status(200).json(await userDAO.updateUser(req.params.username, req.body));
  } catch (error) {
    res.status(500).json({
      error: error.toString(),
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    const deleteUser = await userDAO.deleteUser(req.params.id);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(500).json({
      error: error.toString(),
    });
  }
};

export default {
  getAllUsers,
  getUserByUsername,
  fetchUserById,
  createUser,
  loginUser,
  updateUser,
  deleteUser
};
