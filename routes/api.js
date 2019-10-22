const router = require("express").Router();
const { registerValidation, loginValidation } = require("./auth/userAuth");
const User = require('../model/User');

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  const { password, verify_password} = req.body;
  if(password != verify_password) return res.status(400).send({error: 'Password mismatch'});

  try {
  const user = await User.create(req.body);
  
  res.json(user)
  } catch(err) {
    if(typeof err.message == "string") err = JSON.parse(err.message)
    res.status(400).json(err)
  }


});

router.post('/login', async (req, res) => {
  
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });
  
  try {
    let user = await User.login(req.body);
    
    return res.send({user: user.user.uid})
  } catch (error) {

    return res.status(400).send({error: error.message})
  }
});

module.exports = router;
