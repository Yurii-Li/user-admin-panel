import * as yup from "yup"


const clientValidator = yup.object({
    name: yup.string().matches(/^[a-zа-яёіA-ZА-ЯЇЁ]*$/, "The field cannot contain special characters").max(20, "Max 20 char"),
    surname: yup.string().matches(/^[a-zа-яёіA-ZА-ЯЇЁ]*$/, "The field cannot contain special characters").max(35, "Max 35 char"),
    email: yup.string().matches(/^([\w-\.]*$|[\w-\.]+@([\w-]+\.)+[\w-]{2,4})$/, "Invalid email").max(254, "Max 254 char"),
    phone: yup.string().matches(/^380\d{9}$/, { message: "Invalid phone number. Example: 380501234567", excludeEmptyString: true }).max(12, "Max 12 digits"),
    age: yup.number().nullable().transform((value, originalValue) => {
        return originalValue === "" ? null : value;
    }).min(16, "Min age 16").max(90, "Max age 90"),
    alreadyPaid: yup.number().nullable().transform((value, originalValue) => {
        return originalValue === "" ? null : value;
    }).min(1, 'Min 1').max(2147483647,"Max 2147483647"),
    sum: yup.number().nullable().transform((value, originalValue) => {
        return originalValue === "" ? null : value;
    }).min(1, 'Min 1').max(2147483647,"Max 2147483647")
})

export {
    clientValidator
}
