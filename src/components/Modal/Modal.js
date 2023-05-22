import "./modal.scss";

const Modal = (props) => {
    if (props.openModal) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }

    if (!props.openModal) return null;

    return (
        <div onClick={() => props.closeModal(false)} className={"overlay"}>
            <div onClick={(e) => e.stopPropagation()}>{props.children}</div>
        </div>
    );
};

export { Modal };
