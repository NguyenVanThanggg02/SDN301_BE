import express from "express";
import { userController } from "../controllers/index.js";

const userRouter = express.Router();

//get all users
userRouter.get('/listUser', userController.getAllUsers);


//get user
// userRouter.get('/:id', userController.getUserById);
//POSR :/users
userRouter.post('/register', userController.createUser);
userRouter.post('/login', userController.loginUser);


export default userRouter