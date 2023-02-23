import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {ordersActions} from "../../redux/slices";

import "./commentForm.scss";

import {commentValidator} from "../../validators";
import {yupResolver} from "@hookform/resolvers/yup";
import {FormInput} from "../FormInput/FormInput";


const CommentForm = ({id}) => {

    const {register,reset, handleSubmit, formState:{isValid, errors}} = useForm({mode: "all", resolver: yupResolver(commentValidator)});

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

                <form className={"comment-form"} onSubmit={handleSubmit(submit)}>


                    <FormInput addLabel={false} label={"Comment"} id={"comment"} name={"comment"} register={register} error={errors.comment} type={"text"}  />

                    <button className={"comment-form__button"} type={"submit"}>submit</button>
                </form>


    );
};

export {
    CommentForm
};
