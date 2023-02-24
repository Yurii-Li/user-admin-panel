import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";

import { activateUserValidator } from "../../validators";
import { usersService } from "../../services";
import { FormInput } from "../FormInput/FormInput";

import "./activateUserForm.scss";

const ActivateUserForm = () => {
    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        formState: { isValid, errors },
    } = useForm({
        mode: "all",
        resolver: yupResolver(activateUserValidator),
    });

    const { token } = useParams();

    const submit = async (data) => {
        await usersService.activateUser(token, data.password);
        navigate("/login");
    };

    return (
        <form className={"activate-user-form"} onSubmit={handleSubmit(submit)}>
            <FormInput
                label={"Password"}
                id={"password"}
                name={"password"}
                register={register}
                error={errors.password}
                type={"text"}
            />

            <FormInput
                label={"Confirm Password"}
                id={"confirm-Password"}
                name={"confirmPassword"}
                register={register}
                error={errors.confirmPassword}
                type={"text"}
            />

            <button className={"activate-user-form__button"} disabled={!isValid} type="submit">
                Activate
            </button>
        </form>
    );
};

export {ActivateUserForm};
