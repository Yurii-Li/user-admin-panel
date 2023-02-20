import "./formSelect.scss"

const FormSelect = (
    {
        register,
        label,
        id,
        name,
        options,
        defaultLabel,
        ...selectProps
    }
) => {
    return (
        <div className="form-select">
            <label htmlFor={id}>{label}</label>
            <select className={"form-select__select"} id={id} name={name} {...register(name)} {...selectProps}>
                <option value={""}>{defaultLabel}</option>
                {options.map((option, index) => (
                    typeof option === "object" ? <option key={index} value={option.value}>{option.label}</option> : <option key={index} value={option}>{option}</option>
                ))}
            </select>

        </div>
    );
};

export {FormSelect};
