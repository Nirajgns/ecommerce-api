const router = require('express').Router();
const userModel = require('./../models/user_model');

router.post("/createaccount", async function(req, res) {
  const userData = req.body;
  const newUser = new userModel(userData);
  await newUser.save(function(err) {
    if (err)
    {
      res.json({ success: false, error: err });
      return;
    }

    res.json({ success: true, data: newUser });
  });
});

module.exports = router;