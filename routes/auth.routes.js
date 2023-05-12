const express = require('express');
const router = express.Router();
const User = require('../models/User');
const crypto = require('crypto');

// Generate unique URL
router.post('/generate', async (req, res) => {
  const uniqueUrl = crypto.randomBytes(10).toString('hex');

  const user = new User({
    uniqueUrl: uniqueUrl,
    password: req.body.password ? await bcrypt.hash(req.body.password, 10) : null,
  });

  const result = await user.save();

  res.send({ uniqueUrl });
});

// Authenticate user (for password-protected URLs)
router.post('/authenticate', async (req, res) => {
  const user = await User.findOne({ uniqueUrl: req.body.uniqueUrl });

  if (!user) {
    return res.status(404).send({
      message: 'User not found',
    });
  }

  if (user.password && !(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).send({
      message: 'Invalid password',
    });
  }

  res.send({ message: 'Success' });
});

module.exports = router;
