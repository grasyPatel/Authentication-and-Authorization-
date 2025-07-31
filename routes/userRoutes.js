import express from 'express';
import { createUser } from "../controller/userController.js"

const router = express.Router();

//Api POST  /api/user/create
router.post('/create', createUser);

export default router;