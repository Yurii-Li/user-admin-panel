import * as yup from "yup";

const createUserValidator = yup.object({
    email: yup.string().matches(/^([\w-\.]+\@([\w-]+\.)+[\w-]{2,4})$/, "Invalid email").max(254, "Max 254 char"),
    name: yup.string().min(1, "Min 1 char").matches(/^[a-zа-яёіA-ZА-ЯЇЁ]*$/, "The field cannot contain special characters").max(20, "Max 20 char"),
    surname: yup.string().min(1, "Min 1 char").matches(/^[a-zа-яёіA-ZА-ЯЇЁ]*$/, "The field cannot contain special characters").max(20, "Max 20 char"),
});

export {
    createUserValidator
}
