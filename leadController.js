const Lead = require('../models/Lead');

// Get all leads
const getLeads = async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
};

// Create a new lead
const createLead = async (req, res) => {
  const { name, email, phone } = req.body;

  const lead = new Lead({ name, email, phone });
  const createdLead = await lead.save();
  res.status(201).json(createdLead);
};

module.exports = { getLeads, createLead };
