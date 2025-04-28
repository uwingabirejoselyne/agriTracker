// backend/routes/auth.js
const express = require('express');
const {  userRegister } = require('../controllers/authController');
const authRouter = express.Router();

authRouter.post('/register', userRegister);

module.exports = authRouter;
