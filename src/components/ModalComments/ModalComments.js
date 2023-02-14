import "./modalComments.scss"

const ModalComments = ({comments,openModalComments}) => {
    if (!openModalComments) return null;
    return (
        <div className={"overlay"}>

            <div className={"modal-comments"}>
                Modal
            </div>
            
        </div>
    );
};

export {ModalComments};
