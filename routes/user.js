import express from "express";
import { userController } from "../controllers/index.js";

const userRouter = express.Router();

//get all users
userRouter.get('/listUser', userController.getAllUsers);


//get user
userRouter.get('/:username', userController.getUserByUsername);
userRouter.get('/:id', userController.fetchUserById);
//POSR :/users
userRouter.post('/register', userController.createUser);
userRouter.post('/login', userController.loginUser);
userRouter.put("/:username", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);


export default userRouter

