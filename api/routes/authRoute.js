// backend/routes/auth.js
const express = require('express');
const {  userRegister,loginUser } = require('../controllers/authController');
const authRouter = express.Router();

authRouter.post('/register', userRegister);
authRouter.post('/login', loginUser);

module.exports = authRouter;
