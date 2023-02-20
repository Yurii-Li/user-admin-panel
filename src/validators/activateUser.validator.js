import * as yup from "yup"


const activateUserValidator = yup.object({

    password: yup.string().max(20, "Max 20 char").min(8, "Min 8 char"),
    confirmPassword: yup.string().max(20, "Max 20 char").min(8, "Min 8 char").oneOf([yup.ref('password'), null], 'Passwords must match'),

})

export {activateUserValidator}
