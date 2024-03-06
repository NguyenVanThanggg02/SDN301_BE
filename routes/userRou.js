import express from 'express';
import { userControll } from '../controllers/index.js';

const usertRouter = express.Router();

// PUT: /products/:id
usertRouter.put("/:id", userControll.updateUser);

// // DELETE: /user/:id
// usertRouter.delete("/:id", userControll.deleteUser);

export default usertRouter;