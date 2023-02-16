import "./modal.scss"


const Modal = (props) => {

    if (!props.openModal) return null;

    return (
        <div onClick={() => props.closeModal(false)} className={"overlay"}>

            <div onClick={(e) => e.stopPropagation()} >
                {props.children}
            </div>

        </div>
    );
};

export {Modal};
