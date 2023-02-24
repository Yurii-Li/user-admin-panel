import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";

import { loginValidator } from "../../validators";

import "./loginForm.scss";
import {FormInput} from "../FormInput/FormInput";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../redux/slices";


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


    const dispatch = useDispatch();

    const {loading, error} = useSelector((state) => state.authReducer);





    const submit =  (user) => {
         dispatch(authActions.login(user));
    };


    const errorMsg =  error?.detail === "No active account found with the given credentials" ? "Wrong email or password" : "Something went wrong";


    return (
        <form className={"login-form"} onSubmit={handleSubmit(submit)}>

            <FormInput id={"email"} type={"text"} name={"email"} label={"Email"} register={register} error={errors.email} />
            <FormInput id={"password"} type={"password"} name={"password"} label={"Password"} register={register} error={errors.password} />
            {error && <div className={"login-form__error"}>{errorMsg}</div>}

            <button className={"login-form__btn button"} disabled={!isValid}>
                {loading ? "Loading..." : "Login"}
            </button>
        </form>
    );
};

export {LoginForm};
