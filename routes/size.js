import express from 'express';
import { sizeController } from '../controllers/size.js';

const SizeRouter = express.Router();

// GET: /user -> Get user by id
SizeRouter.get('/size', sizeController);

export default SizeRouter;