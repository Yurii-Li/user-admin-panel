import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {usersActions} from "../../redux/slices";
import "./createUserForm.scss";
import {FormInput} from "../FormInput/FormInput";

const CreateUserForm = ({setOpenCreateUser}) => {

    const {handleSubmit, register, formState: {errors, isValid}} = useForm({
        mode: "all"
    });

    const dispatch = useDispatch();

    const submit = (data) => {
        const dataToSend = {
            email: data.email,
            profile: {
                name: data.name,
                surname: data.surname
            }
        }

        dispatch(usersActions.createUser(dataToSend));
    }

    return (
        <form className={"create-user-form"} onSubmit={handleSubmit(submit)}>

            {/*<div className={"create-user-form__item"}>*/}
            {/*    <label htmlFor="email">Email</label>*/}
            {/*    <input className={"create-user-form__input"} type="text" id="email" {...register("email")} />*/}
            {/*    {errors.email && <div>{errors.email.message}</div>}*/}
            {/*</div>*/}

            <FormInput label={"Email"} id={"email"} name={"email"} register={register} error={errors.email} type={"text"} />

            {/*<div className={"create-user-form__item"}>*/}
            {/*    <label htmlFor="name">Name</label>*/}
            {/*    <input className={"create-user-form__input"} type="text" id="name" {...register("name")} />*/}
            {/*    {errors.name && <div>{errors.name.message}</div>}*/}
            {/*</div>*/}

            <FormInput label={"Name"} id={"name"} name={"name"} register={register} error={errors.name} type={"text"}  />

            {/*<div className={"create-user-form__item"}>*/}
            {/*    <label htmlFor="surname">Surname</label>*/}
            {/*    <input className={"create-user-form__input"} type="text" id="surname" {...register("surname")} />*/}
            {/*    {errors.surname && <div>{errors.surname.message}</div>}*/}
            {/*</div>*/}

            <FormInput label={"Surname"} id={"surname"} name={"surname"} register={register} error={errors.surname} type={"text"}  />

            <div className={"create-user-form__buttons"}>
                <button className={"create-user-form__button"} type="button" onClick={() => setOpenCreateUser(false)}>Cancel</button>
                <button className={"create-user-form__button"} type="submit">Create</button>
            </div>

        </form>

    );
};

export {CreateUserForm};
