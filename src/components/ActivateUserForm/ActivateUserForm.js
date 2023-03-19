import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { activateUserValidator } from "../../validators";
import { usersActions } from "../../redux/slices";
import { FormInput } from "../FormInput/FormInput";

import "./activateUserForm.scss";

const ActivateUserForm = () => {
    const dispatch = useDispatch();
    const { token } = useParams();
    const navigate = useNavigate();
    const { error } = useSelector((state) => state.usersReducer);

    const {
        handleSubmit,
        register,
        formState: { isValid, errors },
    } = useForm({
        mode: "all",
        resolver: yupResolver(activateUserValidator),
    });

    const submit = async (data) => {
        dispatch(usersActions.activateUser({ token, password: data.password }));
    };

    const linkIsNotRelevant = error && error.details === "Token invalid or expired";

    return (
        <div className={"activate-user-form"}>
            {linkIsNotRelevant ? (
                <div className={"activate-user-form__error"}>
                    <div>The link is not valid, please contact the administrator to solve the problem</div>
                    <button onClick={() => navigate("/login")} className={"activate-user-form__button"}>
                        Back to login
                    </button>
                </div>
            ) : (
                <form className={"activate-user-form__form"} onSubmit={handleSubmit(submit)}>
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
            )}
        </div>
    );
};

export { ActivateUserForm };
