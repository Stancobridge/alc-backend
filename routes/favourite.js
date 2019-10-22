const favRouter = require("express").Router();
const { favouriteValidation } = require("./auth/userAuth");
const Favourite = require('../model/Favourite');

favRouter.post('/addFav', async (req, res) =>{
  try {
    const {error} = favouriteValidation(req.body)
    if(error) return res.status(400).send(error)

    let favVid = await Favourite.create(req.body)
    res.send(favVid)
  } catch (err) {
    return err
  }
})

favRouter.post('/getFav', async (req, res) =>{
  try {

    let favVid = await Favourite.getFav(req.body)
    res.send(favVid)
  } catch (err) {
    return err
  }
})

module.exports = favRouter;
