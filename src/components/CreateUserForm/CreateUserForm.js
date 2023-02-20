import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {usersActions} from "../../redux/slices";

const CreateUserForm = ({setOpenCreateUser}) => {

    const {handleSubmit, register, formState: {errors, isValid}} = useForm({
        mode: "all"
    });

    const dispatch = useDispatch();

    const submit = (data) => {
        const dataToSend = {
            email: data.email,
            profile:{
                name: data.name,
                surname: data.surname
            }
        }

        dispatch(usersActions.createUser(dataToSend));
    }

    return (
        <form style={{backgroundColor: "white"}} onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="email">email</label>
                <input type="text" id="email" {...register("email")} />
                {errors.email && <div>{errors.email.message}</div>}
            </div>

            <div>
                <label htmlFor="name">name</label>
                <input type="text" id="name" {...register("name")} />
                {errors.name && <div>{errors.name.message}</div>}
            </div>

            <div>
                <label htmlFor="surname">surname</label>
                <input type="text" id="surname" {...register("surname")} />
                {errors.surname && <div>{errors.surname.message}</div>}
            </div>

            <button type="button" onClick={() => setOpenCreateUser(false)}>Cancel</button>
            <button type="submit">Create</button>

        </form>

    );
};

export {CreateUserForm};
