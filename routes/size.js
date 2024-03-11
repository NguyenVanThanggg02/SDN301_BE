import express from 'express';
import { sizeController } from '../controllers/index.js';

const SizeRouter = express.Router();

// GET: /user -> Get user by id
SizeRouter.get('/', sizeController.fetchAllSize);

export default SizeRouter;