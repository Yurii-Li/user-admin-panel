import * as yup from "yup"


const activateUserValidator = yup.object({

    password: yup.string().min(8, "Min 8 char").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])(?!.*\s).+$/, "Password must include one lowercase letter, one uppercase letter, one digit, and one non-alphanumeric character (e.g., @, #, $, %, or _), and no whitespace").max(20, "Max 20 char"),

    confirmPassword: yup.string().min(8, "Min 8 char").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])(?!.*\s).+$/, "Password must include one lowercase letter, one uppercase letter, one digit, and one non-alphanumeric character (e.g., @, #, $, %, or _), and no whitespace").oneOf([yup.ref('password'), null], 'Passwords must match').max(20, "Max 20 char")

})

export {activateUserValidator}

