import "./clientForm.scss"
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {ordersActions} from "../../redux/slices";
import {yupResolver} from "@hookform/resolvers/yup";
import {clientValidator} from "../../validators";

const ClientForm = ({setOpenModalForm, order}) => {

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
        manager

    } = order;

    const {groups} = useSelector((state) => state.groupsReducer);

    const {handleSubmit, register, formState: {errors, isValid}} = useForm({
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
            status: manager === null ? "В работе" : status,
            sum: sum,
            alreadyPaid: alreadyPaid,
            group: group ? group.id : "",
        },
        resolver: yupResolver(clientValidator)
    });

    const dispatch = useDispatch();


    const submit = (data) => {
        dispatch(ordersActions.patchOrder({id, data}));
    }







    return (
        <form className={"client-form"} onSubmit={handleSubmit(submit)}>

            <div className={"client-form__inputs"}>

                <div className={"client-form__item"}>
                    <label htmlFor={"group"}>Group</label>

                    <select className={"client-form__input"} id={"group"} name={"group"} {...register("group")}>
                        <option value={""}>all groups</option>
                        {
                            groups.map((group) => <option key={group.id} value={group.id}>{group.name}</option>)
                        }
                    </select>
                </div>


                <div className={"client-form__item"}>
                    <label htmlFor={"status"}>Status</label>
                    <select className={"client-form__input"} id={"status"} name={"status"} {...register("status")}>
                        <option value={""}>all statuses</option>
                        <option value={"В работе"}>В работе</option>
                        <option value={"Новый"}>Новый</option>
                        <option value={"Согласен"}>Согласен</option>
                        <option value={"Не согласен"}>Не согласен</option>
                        <option value={"Дубляж"}>Дубляж</option>
                    </select>
                </div>


                <div className={"client-form__item"}>
                    <label htmlFor={"name"}>Name</label>
                    <input className={`client-form__input ${errors.name && "client-form__input_red"}`} id={"name"}
                           type="text" placeholder={"name"} name={"name"}  {...register("name")} />

                    {errors.name && <div>{errors.name.message}</div>}
                </div>


                <div className={"client-form__item"}>
                    <label htmlFor={"sum"}>Sum</label>
                    <input className={`client-form__input ${errors.sum && "client-form__input_red"} `} id={sum}
                           type="number" placeholder={"sum"} name={"sum"}    {...register("sum")} />

                    {errors.sum && <div>{errors.sum.message}</div>}
                </div>

                <div className={"client-form__item"}>
                    <label htmlFor={"surname"}>Surname</label>
                    <input className={`client-form__input ${errors.surname && "client-form__input_red"}`} id={"surname"}
                           type="text" placeholder={"surname"}
                           name={"surname"}  {...register("surname")} />

                    {errors.surname && <div>{errors.surname.message}</div>}
                </div>

                <div className={"client-form__item"}>
                    <label htmlFor={"alreadyPaid"}>Already paid</label>
                    <input className={`client-form__input ${errors.alreadyPaid && "client-form__input_red"}`}
                           id={"alreadyPaid"} type="text" placeholder={"already paid"}
                           name={"alreadyPaid"} {...register("alreadyPaid")} />
                    {errors.alreadyPaid && <div>{errors.alreadyPaid.message}</div>}
                </div>

                <div className={"client-form__item"}>
                    <label htmlFor={"email"}>Email </label>
                    <input className={`client-form__input ${errors.email && "client-form__input_red"}`} id={"email"}
                           type="text" placeholder={"email"} name={"email"} {...register("email")} />
                    {errors.email && <div>{errors.email.message}</div>}
                </div>

                <div className={"client-form__item"}>
                    <label htmlFor={"course"}>Course</label>
                    <select className={"client-form__input"} id={"course"} name={"course"} {...register("course")}>
                        <option value={""}>all courses</option>
                        <option value={"FS"}>FS</option>
                        <option value={"QACX"}>QACX</option>
                        <option value={"JCX"}>JCX</option>
                        <option value={"JSCX"}>JSCX</option>
                        <option value={"FE"}>FE</option>
                        <option value={"PCX"}>PCX</option>
                    </select>
                </div>

                <div className={"client-form__item"}>
                    <label htmlFor={"phone"}>Phone </label>
                    <input className={`client-form__input ${errors.phone && "client-form__input_red"}`} id={"phone"}
                           type={"text"} placeholder={"phone"} name={"phone"} {...register("phone")} />

                    {errors.phone && <div>{errors.phone.message}</div>}
                </div>

                <div className={"client-form__item"}>
                    <label htmlFor={"course_format"}>Course format</label>
                    <select className={"client-form__input"} id={"course_format"}
                            name={"course_format"} {...register("course_format")}>
                        <option value={""}>all formats</option>
                        <option value={"static"}>static</option>
                        <option value={"online"}>online</option>
                    </select>
                </div>

                <div className={"client-form__item"}>
                    <label htmlFor={"age"}>Age</label>
                    <input className={`client-form__input ${errors.age && "client-form__input_red"}`} id={"age"}
                           type="number" placeholder={"age"} name={"age"} {...register("age")} />

                    {errors.age && <div>{errors.age.message}</div>}
                </div>

                <div className={"client-form__item"}>

                    <label htmlFor={"course_type"}>Course type</label>
                    <select className={"client-form__input"} id={"course_type"}
                            name={"course_type"} {...register("course_type")}>
                        <option value={""}>all types</option>
                        <option value={"pro"}>pro</option>
                        <option value={"minimal"}>minimal</option>
                        <option value={"premium"}>premium</option>
                        <option value={"incubator"}>incubator</option>
                        <option value={"vip"}>vip</option>
                    </select>
                </div>
            </div>


            <div className={"client-form__btns"}>
                <button className={"client-form__btn"} type={"button"} onClick={() => setOpenModalForm(false)}>Close
                </button>
                <button className={"client-form__btn"} type={"submit"}>Submit</button>
            </div>
        </form>
    );
};

export {ClientForm};
