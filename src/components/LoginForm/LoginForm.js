import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";

import { authService } from "../../services";
import { loginValidator } from "../../validators";

import "./loginForm.scss";


const LoginForm = () => {
    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        formState: { isValid },
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
            <input className={"login-form__input"} type="text" placeholder="email" {...register("email", { required: true })} />
            <input
                className={"login-form__input"}
                type="text"
                placeholder="password"
                {...register("password", { required: true })}
            />
            <button className={"login-form__btn button"} disabled={!isValid}>
                Login
            </button>
        </form>
    );
};

export {LoginForm};
