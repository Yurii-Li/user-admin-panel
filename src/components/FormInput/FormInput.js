import "./formInput.scss"



const FormInput = ({register, error, label, id, name, ...inputProps}) => {
    return (
        <div className="form-input">
            <label htmlFor={id}>{label}</label>
            <input
                className={`form-input__input ${error && "form-input__input_red"}`}
                id={id} {...register(name)} {...inputProps} />
            {error && <span className={"form-input__error"} >{error.message}</span>}
        </div>
    );
};



export {FormInput};
