const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const userRegister = async (req,res)=>{
    const {name,email,password} = req.body

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
          return res.status(400).json({ message: 'User already exists' });
        }
    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        const user = await User.create({
          name,
          email,
          password: hashedPassword,
        });
    
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          token: generateToken(user._id),
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };
    
    const generateToken = (id) => {
      return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
      });
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ user: { name: user.name, email: user.email,token } });
  } catch (err) {
    res.status(500).json({ message: 'Login failed' });
  }
};
module.exports = {userRegister,loginUser}
