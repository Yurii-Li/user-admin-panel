import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {activateUserValidator} from "../../validators";
import {useNavigate, useParams} from "react-router-dom";
import {usersService} from "../../services";
import "./activateUserForm.scss";
import {FormInput} from "../FormInput/FormInput";

const ActivateUserForm = () => {
    const navigate = useNavigate();


    const {handleSubmit, register, formState: {isValid, errors}} = useForm({
        mode: "all",
        resolver: yupResolver(activateUserValidator)
    });

    const {token} = useParams();

    const submit = async (data) => {
        await usersService.activateUser(token, data.password);
        navigate("/login");
    }


    return (
        <form className={"activate-user-form"} onSubmit={handleSubmit(submit)}>
            {/*<div className={"activate-user-form__item"}>*/}
            {/*    <label htmlFor="password">Password</label>*/}
            {/*    <input id={"password"} type="text"  {...register("password")}/>*/}
            {/*    {errors.password && <div>{errors.password.message}</div>}*/}
            {/*</div>*/}

            <FormInput label={"Password"} id={"password"} name={"password"} register={register} error={errors.password} type={"text"}  />


            {/*<div className={"activate-user-form__item"}>*/}
            {/*    <label htmlFor="confirm-Password">Confirm Password</label>*/}
            {/*    <input id={"confirm-Password"} type="text"  {...register("confirmPassword")}/>*/}
            {/*    {errors.confirmPassword && <div>{errors.confirmPassword.message}</div>}*/}
            {/*</div>*/}

            <FormInput label={"Confirm Password"} id={"confirm-Password"} name={"confirmPassword"} register={register} error={errors.confirmPassword} type={"text"}  />

            <button className={"activate-user-form__button"} disabled={!isValid} type="submit">Activate</button>
        </form>
    );
};

export {ActivateUserForm};
