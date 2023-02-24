import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";

import { groupsActions, ordersActions } from "../../redux/slices";
import { clientValidator } from "../../validators";
import { FormSelect } from "../FormSelect/FormSelect";
import { FormInput } from "../FormInput/FormInput";

import "./clientForm.scss";


const ClientForm = ({ setOpenModalForm, order }) => {
    const { id, name, surname, email, phone, age, course, course_format, course_type, status, sum, alreadyPaid, group, manager } =
        order;

    const { groups } = useSelector((state) => state.groupsReducer);

    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors, isValid },
    } = useForm({
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
        resolver: yupResolver(clientValidator),
    });

    const dispatch = useDispatch();

    const [groupInput, setGroupInput] = useState(false);

    const submit = (data) => {
        if (groupInput) {

            dispatch(groupsActions.createGroup(data.group));
        } else {
            dispatch(ordersActions.patchOrder({ id, data }));
        }
    };

    const changeGroupInput = (e) => {
        e.preventDefault();
        setGroupInput(!groupInput);
        !groupInput ? setValue("group", "") : setValue("group", group ? group.id : "");
    };

    return (
        <form className={"client-form"} onSubmit={handleSubmit(submit)}>
            <div className={"client-form__inputs"}>

                {groupInput ? (
                    <div className={"client-form__item  client-form__item_row"}>
                        <FormInput
                            id={"group"}
                            type={"text"}
                            name={"group"}
                            label={"Group"}
                            register={register}
                            error={errors.group}
                        />
                        <div className={"client-form__input-buttons"}>
                            <button className={"client-form__input-button"} type={"submit"}>
                                Add
                            </button>
                            <button className={"client-form__input-button"} onClick={changeGroupInput}>
                                Select
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className={"client-form__item"}>
                        <FormSelect
                            id={"group"}
                            name={"group"}
                            label={"Group"}
                            options={groups.map((group) => ({ value: group.id, label: group.name }))}
                            register={register}
                            defaultLabel={"all groups"}
                        />

                        <button className={"client-form__input-button"} onClick={changeGroupInput}>
                            Add group
                        </button>
                    </div>
                )}

                <div className={"client-form__item"}>
                    <FormSelect
                        id={"status"}
                        name={"status"}
                        label={"Status"}
                        options={["В работе", "Новый", "Согласен", "Не согласен", "Дубляж"]}
                        register={register}
                        defaultLabel={"all statuses"}
                    />
                </div>

                <div className={"client-form__item"}>
                    <FormInput id={"name"} type={"text"} name={"name"} label={"Name"} register={register} error={errors.name} />
                </div>

                <div className={"client-form__item"}>
                    <FormInput id={"sum"} type={"number"} name={"sum"} label={"Sum"} register={register} error={errors.sum} />
                </div>

                <div className={"client-form__item"}>
                    <FormInput
                        id={"surname"}
                        type={"text"}
                        name={"surname"}
                        label={"Surname"}
                        register={register}
                        error={errors.surname}
                    />
                </div>

                <div className={"client-form__item"}>
                    <FormInput
                        id={"alreadyPaid"}
                        type={"number"}
                        name={"alreadyPaid"}
                        label={"Already paid"}
                        register={register}
                        error={errors.alreadyPaid}
                    />
                </div>

                <div className={"client-form__item"}>
                    <FormInput
                        id={"email"}
                        type={"text"}
                        name={"email"}
                        label={"Email"}
                        register={register}
                        error={errors.email}
                    />
                </div>

                <div className={"client-form__item"}>
                    <FormSelect
                        id={"course"}
                        name={"course"}
                        label={"Course"}
                        register={register}
                        defaultLabel={"all courses"}
                        options={["FS", "QACX", "JCX", "JSCX", "FE", "PCX"]}
                    />
                </div>

                <div className={"client-form__item"}>
                    <FormInput
                        id={"phone"}
                        type={"text"}
                        name={"phone"}
                        label={"Phone"}
                        register={register}
                        error={errors.phone}
                    />
                </div>

                <div className={"client-form__item"}>
                    <FormSelect
                        id={"course_format"}
                        name={"course_format"}
                        label={"Course format"}
                        register={register}
                        defaultLabel={"all formats"}
                        options={["static", "online"]}
                    />
                </div>

                <div className={"client-form__item"}>
                    <FormInput id={"age"} type={"number"} name={"age"} label={"Age"} register={register} error={errors.age} />
                </div>

                <div className={"client-form__item"}>
                    <FormSelect
                        id={"course_type"}
                        name={"course_type"}
                        label={"Course type"}
                        register={register}
                        defaultLabel={"all types"}
                        options={["pro", "minimal", "premium", "incubator", "vip"]}
                    />
                </div>
            </div>

            <div className={"client-form__btns"}>
                <button className={"client-form__btn"} type={"button"} onClick={() => setOpenModalForm(false)}>
                    Close
                </button>
                <button className={"client-form__btn"} type={"submit"}>
                    Submit
                </button>
            </div>
        </form>
    );
};

export {
    ClientForm
};
