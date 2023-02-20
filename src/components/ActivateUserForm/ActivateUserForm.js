import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {activateUserValidator} from "../../validators";
import {useNavigate, useParams} from "react-router-dom";
import {usersService} from "../../services";

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
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="password" {...register("password")}/>
            {errors.password && <div>{errors.password.message}</div>}
            <input type="text" placeholder="confirm password" {...register("confirmPassword")}/>
            {errors.confirmPassword && <div>{errors.confirmPassword.message}</div>}
            <button disabled={!isValid} type="submit">Activate</button>
        </form>
    );
};

export {ActivateUserForm};
