const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A name is needed'],
    trim: true,
    maxlength: [20, 'Only 20 characters'],
  },completed: {
    type: Boolean,
    default: false,
  }
});

module.exports = mongoose.model("Task", TaskSchema);
