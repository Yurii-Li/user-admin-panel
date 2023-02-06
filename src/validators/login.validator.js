import Joi from "joi";


const loginValidator = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
})

export {loginValidator};
