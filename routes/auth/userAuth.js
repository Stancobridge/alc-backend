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


module.exports.registerValidation = registerValidation