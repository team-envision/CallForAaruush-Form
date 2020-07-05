const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// @route  POST api/forms
// @dsc    Store data in database
router.post('/', async (req, res) => {
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
  // const form = new Form({
  //   name,
  //   email,
  //   alreadyInAaruush,
  // });
  // try {
  //   await form.save();
  //   return res.status(200).json({
  //     form: form,
  //   });
  // } catch (err) {
  //   console.error(err.message);
  //   res.status(400).send('adding new form failed');
  // }
});

module.exports = router;
