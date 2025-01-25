const mongoose = require('mongoose');

const leadSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    status: { type: String, default: 'New' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Lead', leadSchema);
