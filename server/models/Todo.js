const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: { type: String, required: true },
    completed: { type: Boolean, default: false },
    dueTime: { type: String }, // Stores time in HH:mm format
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Todo', todoSchema);