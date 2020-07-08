const express = require('express');
const router = express.Router();
const Form = require('../models/Form');
const { check, validationResult } = require('express-validator');

// @route  POST api/forms
// @dsc    Store data in database
router.post(
  '/',
  [
    check('name', 'Please Enter a valid name').notEmpty(),
    check('email', 'Please Enter a valid email').isEmail(),
    check('alreadyInAaruush', 'Please Enter a valid input').notEmpty(),
  ],
  async (req, res) => {
    const { name, email, alreadyInAaruush } = req.body;
    try {
      let form = new Form({
        name,
        email,
        alreadyInAaruush,
      });
      await form.save();
      return res.status(200).json({
        form: form,
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
