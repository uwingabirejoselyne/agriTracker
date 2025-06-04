require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRoute');
const connectDb = require('./config/mongodb');

const app = express();


app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.send('AgriTrackR API is running');
});


connectDb();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
