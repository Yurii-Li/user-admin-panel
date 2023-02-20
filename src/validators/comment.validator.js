import * as yup from "yup"

const commentValidator = yup.object({
    comment: yup.string().min(1, "Min 1 char" ).max(255, "Max 255 char")
})

export {commentValidator}
