import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {ordersActions} from "../../redux/slices";

import "./commentForm.scss";


const CommentForm = ({id}) => {

    const {register,reset, handleSubmit} = useForm({mode: "all"});

    const {adminProfile} = useSelector((state) => state.adminProfileReducer);

    const dispatch = useDispatch();


    const submit = async (data) => {
        const dataToSend = {
            ...data,
            manager: {
                name: adminProfile?.profile.name,
                surname: adminProfile?.profile.surname,
            }
        }
        dispatch(ordersActions.addOrderComment({id, data: dataToSend}));

        reset();
    }


    return (
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register("comment")}/>
                <button type={"submit"}>submit</button>
            </form>

    );
};

export {
    CommentForm
};
