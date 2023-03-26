import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {yupResolver} from "@hookform/resolvers/yup";

import { FormInput } from "../FormInput/FormInput";
import { usersActions } from "../../redux/slices";
import {createUserValidator} from "../../validators";

import "./createUserForm.scss";



const CreateUserForm = ({ setOpenCreateUser }) => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        mode: "all",
        resolver: yupResolver(createUserValidator),
    });

    const dispatch = useDispatch();

    const submit = (data) => {
        const dataToSend = {
            email: data.email,
            profile: {
                name: data.name,
                surname: data.surname,
            },
        };

        dispatch(usersActions.createUser(dataToSend));
        setOpenCreateUser(false);
    };

    return (
        <form className={"create-user-form"} onSubmit={handleSubmit(submit)}>
            <FormInput label={"Email"} id={"email"} name={"email"} register={register} error={errors.email} type={"text"} />

            <FormInput label={"Name"} id={"name"} name={"name"} register={register} error={errors.name} type={"text"} />

            <FormInput
                label={"Surname"}
                id={"surname"}
                name={"surname"}
                register={register}
                error={errors.surname}
                type={"text"}
            />

            <div className={"create-user-form__buttons"}>
                <button className={"create-user-form__button"} type="button" onClick={() => setOpenCreateUser(false)}>
                    Cancel
                </button>
                <button className={"create-user-form__button"} type="submit">
                    Create
                </button>
            </div>
        </form>
    );
};

export { CreateUserForm };
