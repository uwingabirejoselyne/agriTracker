require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDb = require('./config/mongodb');


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('AgriTrackR API is running');
});
connectDb()

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// fWpNfVQFLoHdoS36
