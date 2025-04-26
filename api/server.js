const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDb = require('./config/mongodb');


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('AgriTrackR API is running');
});

const PORT = process.env.PORT || 5000;
connectDb()
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// fWpNfVQFLoHdoS36
