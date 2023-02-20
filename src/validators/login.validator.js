import * as yup from "yup"


const loginValidator = yup.object({
    email: yup.string().min(1, "Min 1 char").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email").max(254, "Max 254 char").required(),
    password: yup.string().required(),
})

export {loginValidator};
