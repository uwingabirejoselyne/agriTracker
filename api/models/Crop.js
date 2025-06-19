const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: String,
  quantity: Number,
  plantedDate: Date,
  expectedHarvest: Date,
  notes: String,
}, { timestamps: true });

module.exports = mongoose.model('Crop', cropSchema);
