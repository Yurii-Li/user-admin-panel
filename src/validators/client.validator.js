import * as yup from "yup"


const clientValidator = yup.object({
    name: yup.string().min(1, "Min 1 char").matches(/^[a-zа-яёіA-ZА-ЯЇЁ]+$/, "The field cannot be empty and cannot contain special characters").max(20, "Max 20 char"),
    surname: yup.string().min(1, "Min 1 char").matches(/^[a-zа-яёіA-ZА-ЯЇЁ]+$/, "The field cannot be empty and cannot contain special characters").max(35, "Max 35 char"),
    email: yup.string().min(1, "Min 1 char").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email").max(254, "Max 254 char"),
    phone: yup.string().min(1, "Min 1 digit").matches(/^380\d{9}$/, "Invalid phone number. Example: 380501234567").max(12, "Max 12 digit"),
    age: yup.number().min(16, "Min age 16").max(90, "Max age 90").typeError("The field cannot be empty"),
    alreadyPaid: yup.number().min(1, 'Min 1').max(2147483647,"Max 2147483647").typeError("The field cannot be empty"),
    sum: yup.number().min(1, 'Min 1').max(2147483647,"Max 2147483647").typeError("The field cannot be empty")

})

export {
    clientValidator
}
