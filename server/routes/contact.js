const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');

// Validation middleware
const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('service').notEmpty().withMessage('Service is required'),
  body('message').trim().notEmpty().withMessage('Message is required'),
];

// POST /api/contact - Submit contact form
router.post('/', validateContact, async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, service, message } = req.body;

    // Save to database
    const contact = new Contact({
      name,
      email,
      service,
      message,
    });

    await contact.save();

    console.log('✅ New contact form submission saved:', {
      name,
      email,
      service,
      timestamp: new Date().toLocaleString()
    });

    res.status(201).json({
      success: true,
      message: 'Message received! I will get back to you soon.',
      data: contact,
    });
  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form. Please try again.',
      error: error.message,
    });
  }
});

// GET /api/contact - Get all contacts (for you to check)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ 
      success: true, 
      count: contacts.length,
      data: contacts 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// PATCH /api/contact/:id - Update contact status
router.patch('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
