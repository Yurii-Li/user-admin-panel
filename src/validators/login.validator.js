import * as yup from "yup"


const loginValidator = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
})

export {loginValidator};
