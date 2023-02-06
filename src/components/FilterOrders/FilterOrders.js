import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import "./filterOrders.scss";
import "../../styles/button.scss";


const FilterOrders = ({ setParams }) => {

    const { adminProfile } = useSelector((state) => state.adminProfileReducer);

    const { register, reset } = useForm({ mode: "all" });

    const resetForm = () => {
        reset();
        setParams({ target: { name: "reset", value: "reset" } });
    };

    return (
        <form className={"filter-orders"} onChange={setParams}>
            <div className={"filter-orders__inputs"}>
                <input className={"filter-orders__input"} type="text" placeholder={"name"} name={"name"} {...register("name")} />
                <input
                    className={"filter-orders__input"}
                    type="text"
                    placeholder={"surname"}
                    name={"surname"}
                    {...register("surname")}
                />
                <input
                    className={"filter-orders__input"}
                    type="text"
                    placeholder={"email"}
                    name={"email"}
                    {...register("email")}
                />
                <input
                    className={"filter-orders__input"}
                    type="text"
                    placeholder={"phone"}
                    name={"phone"}
                    {...register("phone")}
                />
                <input className={"filter-orders__input"} type="number" placeholder={"age"} name={"age"} {...register("age")} />

                <select className={"filter-orders__input"} name={"course"} {...register("course")}>
                    <option value={""}>all courses</option>
                    <option value={"FS"}>FS</option>
                    <option value={"QACX"}>QACX</option>
                    <option value={"JCX"}>JCX</option>
                    <option value={"JSCX"}>JSCX</option>
                    <option value={"FE"}>FE</option>
                    <option value={"PCX"}>PCX</option>
                </select>
                <select className={"filter-orders__input"} name={"course_format"} {...register("course_format")}>
                    <option value={""}>all formats</option>
                    <option value={"static"}>static</option>
                    <option value={"online"}>online</option>
                </select>
                <select className={"filter-orders__input"} name={"course_type"} {...register("course_type")}>
                    <option value={""}>all types</option>
                    <option value={"pro"}>pro</option>
                    <option value={"minimal"}>minimal</option>
                    <option value={"premium"}>premium</option>
                    <option value={"incubator"}>incubator</option>
                    <option value={"vip"}>vip</option>
                </select>
                <select className={"filter-orders__input"} name={"status"} {...register("status")}>
                    <option value={""}>all statuses</option>
                    <option value={"В работе"}>В работе</option>
                    <option value={"Новый"}>Новый</option>
                    <option value={"Согласен"}>Согласен</option>
                    <option value={"Не согласен"}>Не согласен</option>
                    <option value={"Дубляж"}>Дубляж</option>
                </select>
                <select className={"filter-orders__input"} name={"group"} {...register("group")}>
                    <option value={""}>all groups</option>
                    <option value={"qwerty"}>qwerty</option>
                </select>

                <input
                    type={"text"}
                    placeholder={"start_date"}
                    className={"filter-orders__input"}
                    name={"start_date"}
                    onFocus={(e) => (e.target.type = "date")}
                    {...register("start_date")}
                />

                <input
                    type={"text"}
                    placeholder={"end_date"}
                    className={"filter-orders__input"}
                    name={"end_date"}
                    onFocus={(e) => (e.target.type = "date")}
                    {...register("end_date")}
                />
            </div>

            <div className={"filter-orders__checkbox-button"}>
                <label>
                    <input
                        className={"filter-orders__checkbox"}
                        type={"checkbox"}
                        name={"manager"}
                        value={""}
                        onClick={(e) => (e.target.checked ? (e.target.value = adminProfile.profile.name) : (e.target.value = ""))}
                        {...register("manager")}
                    />
                    My
                </label>

                <button className={"filter-orders__button button"} type={"reset"} onClick={() => resetForm()}>
                    RESET
                </button>
            </div>
        </form>
    );
};

export {FilterOrders};
