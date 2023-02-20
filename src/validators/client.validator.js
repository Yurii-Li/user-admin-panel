import * as yup from "yup"


const clientValidator = yup.object({
    name: yup.string().matches(/^[a-zа-яёіA-ZА-ЯЇЁ]+$/, "The field cannot be empty and cannot contain special characters").max(20, "Max 20 char").min(1, "Min 1 char"),
    surname: yup.string().matches(/^[a-zа-яёіA-ZА-ЯЇЁ]+$/, "The field cannot be empty and cannot contain special characters").max(35, "Max 35 char").min(1, "Min 1 char"),
    email: yup.string().max(254, "Max 254 char").min(1, "Min 1 char").email(),
    phone: yup.string().matches(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, "").max(12, "Max 12 char").min(1, "Min 1 char"),
    age: yup.number().max(90, "Max age 90").min(16, "Min age 16").typeError("The field cannot be empty"),
    alreadyPaid: yup.number().max(2147483647,"Max 2147483647").min(1, 'Min 1').typeError("The field cannot be empty"),
    sum: yup.number().max(2147483647,"Max 2147483647").min(1, 'Min 1').typeError("The field cannot be empty")

})

export {
    clientValidator
}
