import "./modalForm.scss"
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {ordersActions} from "../../redux/slices";

const ModalForm = ({openModalForm, setOpenModalForm, order}) => {

    const {
        id,
        name,
        surname,
        email,
        phone,
        age,
        course,
        course_format,
        course_type,
        status,
        sum,
        alreadyPaid,
        group,
    } = order;

    const {groups} = useSelector((state) => state.groupsReducer);

    const {handleSubmit, register, reset, formState: {errors, isValid,}} = useForm({
        mode: "all",
        defaultValues: {
            name: name,
            surname: surname,
            email: email,
            phone: phone,
            age: age,
            course: course,
            course_format: course_format,
            course_type: course_type,
            status: status,
            sum: sum,
            alreadyPaid: alreadyPaid,
            group: group ? group.id : "",
        }
    });

    const dispatch = useDispatch();



    const submit = (data) => {
        dispatch(ordersActions.patchOrder({id, data}));
    }


    if (!openModalForm) return null;

    return (
        <div onClick={() => setOpenModalForm(false)} className={"overlay"}>

            <div onClick={(e)=> e.stopPropagation()} >

                <form  className={"modal-form"} onSubmit={handleSubmit(submit)}>

                    <div className={"modal-form__inputs"}>
                        <select name={"group"} {...register("group")}>
                            <option value={""}>all groups</option>
                            {
                                groups.map((group) => <option key={group.id} value={group.id}>{group.name}</option>)
                            }
                        </select>

                        <select name={"status"} {...register("status")}>
                            <option value={""}>all statuses</option>
                            <option value={"В работе"}>В работе</option>
                            <option value={"Новый"}>Новый</option>
                            <option value={"Согласен"}>Согласен</option>
                            <option value={"Не согласен"}>Не согласен</option>
                            <option value={"Дубляж"}>Дубляж</option>
                        </select>


                        <input type="text" placeholder={"name"} name={"name"}  {...register("name")} />
                        <input type="number" placeholder={"sum"} name={"sum"}    {...register("sum")} />
                        <input type="text" placeholder={"surname"} name={"surname"}  {...register("surname")} />
                        <input type="text" placeholder={"already paid"} name={"alreadyPaid"} {...register("alreadyPaid")} />
                        <input type="text" placeholder={"email"} name={"email"} {...register("email")} />

                        <select name={"course"} {...register("course")}>
                            <option value={""}>all courses</option>
                            <option value={"FS"}>FS</option>
                            <option value={"QACX"}>QACX</option>
                            <option value={"JCX"}>JCX</option>
                            <option value={"JSCX"}>JSCX</option>
                            <option value={"FE"}>FE</option>
                            <option value={"PCX"}>PCX</option>
                        </select>

                        <input type={"text"} placeholder={"phone"} name={"phone"} {...register("phone")} />

                        <select name={"course_format"} {...register("course_format")}>
                            <option value={""}>all formats</option>
                            <option value={"static"}>static</option>
                            <option value={"online"}>online</option>
                        </select>

                        <input type="number" placeholder={"age"} name={"age"} {...register("age")} />

                        <select name={"course_type"} {...register("course_type")}>
                            <option value={""}>all types</option>
                            <option value={"pro"}>pro</option>
                            <option value={"minimal"}>minimal</option>
                            <option value={"premium"}>premium</option>
                            <option value={"incubator"}>incubator</option>
                            <option value={"vip"}>vip</option>
                        </select>
                    </div>


                    <button type={"button"} onClick={() => setOpenModalForm(false)}>Close</button>
                    <button type={"submit"}>Submit</button>
                </form>
            </div>


        </div>
    );
};

export {ModalForm};
