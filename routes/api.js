const router = require("express").Router();
const { registerValidation } = require("./auth/userAuth");
const User = require('../model/User')

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  const { password, verify_password} = req.body;
  if(password != verify_password) return res.status(400).send({error: 'Password mismatch'});

  try {
  const user = await User.create(req.body)
  res.json(user)
  } catch(err) {
    res.json(err)
  }

});

module.exports = router;
