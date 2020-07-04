const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// @route  POST api/forms
// @dsc    Store data in database
router.post('/', async (req, res) => {
  const form = new Form(req.body);
  try {
    await form.save();
    return res.status(200).json({
      form: form,
    });
  } catch (err) {
    res.status(400).send('adding new form failed');
  }
});

module.exports = router;
