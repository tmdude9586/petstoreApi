const mongoose = require('mongoose')
const petStatus = require('../constants/petStatus')
const schema = new mongoose.Schema({
  category: {
    type: String
  },
  name: {
    type: String
  },
  tags: {
    type: [String]
  },
  status: {
    type: String,
    enum: [petStatus.AVAILABLE, petStatus.PENDING, petStatus.SOLD]
  }
})