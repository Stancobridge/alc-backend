const Joi = require('@hapi/joi');

const registerValidation = data => {
  const schema = Joi.object({
    fullname : Joi.string().min(6).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    verify_password:  Joi.string().min(8).required()
  })

  return schema.validate(data)
}



const loginValidation = data => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  })

  return schema.validate(data)
}


const favouriteValidation = data => {
  const schema = Joi.object({
     userId: Joi.string().required(),
     favouriteVids: Joi.string().required()
  })

  return schema.validate(data)
}



module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
module.exports.favouriteValidation = favouriteValidation