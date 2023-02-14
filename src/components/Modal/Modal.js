import "./modal.scss"


const Modal = (props) => {
    return (
        <div className={"overlay"}>

            {props.children}

        </div>
    );
};

export {Modal};
