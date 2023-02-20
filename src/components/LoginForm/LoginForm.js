import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";

import { authService } from "../../services";
import { loginValidator } from "../../validators";

import "./loginForm.scss";
import {FormInput} from "../FormInput/FormInput";


const LoginForm = () => {
    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        formState: { isValid, errors },
    } = useForm({
        mode: "all",
        resolver: yupResolver(loginValidator),
    });

    const submit = async (user) => {
        const { data } = await authService.login(user);
        authService.setTokens(data);
        navigate("/orders");
    };

    return (
        <form className={"login-form"} onSubmit={handleSubmit(submit)}>

            <FormInput id={"email"} type={"text"} name={"email"} label={"Email"} register={register} error={errors.email} />
            <FormInput id={"password"} type={"password"} name={"password"} label={"Password"} register={register} error={errors.password} />

            <button className={"login-form__btn button"} disabled={!isValid}>
                Login
            </button>
        </form>
    );
};

export {LoginForm};
