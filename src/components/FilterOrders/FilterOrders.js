import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import { FormInput } from "../FormInput/FormInput";
import { FormSelect } from "../FormSelect/FormSelect";

import "./filterOrders.scss";

import resetImg from "../../resources/img/reset.svg";

const FilterOrders = ({ setParams }) => {
    const { adminProfile } = useSelector((state) => state.adminProfileReducer);
    const { groups } = useSelector((state) => state.groupsReducer);

    const { register, reset } = useForm({ mode: "all" });

    const resetForm = () => {
        reset();
        setParams({ target: { name: "reset", value: "reset" } });
    };

    return (
        <form className={"filter-orders"} onChange={setParams}>
            <div className={"filter-orders__inputs"}>
                <div className={"filter-orders__input"}>
                    <FormInput type="text" label={"Name"} addLabel={false} name={"name"} register={register} />
                </div>

                <div className={"filter-orders__input"}>
                    <FormInput type="text" label={"Surname"} addLabel={false} name={"surname"} register={register} />
                </div>

                <div className={"filter-orders__input"}>
                    <FormInput type="text" label={"Email"} addLabel={false} name={"email"} register={register} />
                </div>

                <div className={"filter-orders__input"}>
                    <FormInput type="text" label={"Phone"} addLabel={false} name={"phone"} register={register} />
                </div>

                <div className={"filter-orders__input"}>
                    <FormInput type="number" label={"Age"} addLabel={false} name={"age"} register={register} />
                </div>

                <div className={"filter-orders__input"}>
                    <FormSelect
                        label={"Course"}
                        addLabel={false}
                        name={"course"}
                        register={register}
                        options={["FS", "QACX", "JCX", "JSCX", "FE", "PCX"]}
                        defaultLabel={"all courses"}
                    />
                </div>

                <div className={"filter-orders__input"}>
                    <FormSelect
                        label={"Course format"}
                        addLabel={false}
                        name={"course_format"}
                        register={register}
                        options={["static", "online"]}
                        defaultLabel={"all formats"}
                    />
                </div>

                <div className={"filter-orders__input"}>
                    <FormSelect
                        label={"Course type"}
                        addLabel={false}
                        name={"course_type"}
                        register={register}
                        options={["pro", "minimal", "premium", "incubator", "vip"]}
                        defaultLabel={"all types"}
                    />
                </div>

                <div className={"filter-orders__input"}>
                    <FormSelect
                        label={"Status"}
                        addLabel={false}
                        name={"status"}
                        register={register}
                        options={["В работе", "Новый", "Согласен", "Не согласен", "Дубляж"]}
                        defaultLabel={"all statuses"}
                    />
                </div>

                <div className={"filter-orders__input"}>
                    <FormSelect
                        label={"Group"}
                        addLabel={false}
                        name={"group"}
                        register={register}
                        options={groups.map((group) => ({ value: group.id, label: group.name }))}
                        defaultLabel={"all groups"}
                    />
                </div>

                <div className={"filter-orders__input"}>
                    <FormInput
                        type="text"
                        label={"Start date"}
                        addLabel={false}
                        name={"start_date"}
                        register={register}
                        onFocus={(e) => (e.target.type = "date")}
                    />
                </div>

                <div className={"filter-orders__input"}>
                    <FormInput
                        type="text"
                        label={"End date"}
                        addLabel={false}
                        name={"end_date"}
                        register={register}
                        onFocus={(e) => (e.target.type = "date")}
                    />
                </div>
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

                <button className={"filter-orders__button"} type={"reset"} onClick={() => resetForm()}>
                    <img src={resetImg} className={"filter-orders__button-img"} alt={"reset"} />
                </button>
            </div>
        </form>
    );
};

export {FilterOrders};
