import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";

import { ordersActions } from "../../redux/slices";
import { commentValidator } from "../../validators";
import { FormInput } from "../FormInput/FormInput";

import "./commentForm.scss";

const CommentForm = ({ id, isButtonDisabled, adminProfile }) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "all",
        resolver: yupResolver(commentValidator),
    });

    const dispatch = useDispatch();

    const submit = async (data) => {
        const dataToSend = {
            ...data,
            manager: {
                name: adminProfile?.profile.name,
                surname: adminProfile?.profile.surname,
            },
        };
        dispatch(ordersActions.addOrderComment({ id, data: dataToSend }));

        reset();
    };

    return (
        <form className={"comment-form"} onSubmit={handleSubmit(submit)}>
            <FormInput
                addLabel={false}
                label={"Comment"}
                id={"comment"}
                name={"comment"}
                register={register}
                error={errors.comment}
                type={"text"}
            />

            <button
                className={`comment-form__button ${isButtonDisabled || !isValid ? "comment-form__button_disabled" : ""}`}
                type={"submit"}
                disabled={isButtonDisabled || !isValid}
            >
                submit
            </button>
        </form>
    );
};

export { CommentForm };
