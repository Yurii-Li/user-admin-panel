import {convertDate} from "../../utils/helpers";

import "./modalComment.scss";

const ModalComment = ({item}) => {
    return (
        <div className={"modal-comment"}>
            <div className={"modal-comment__content"}>
                <div className={"modal-comment__text"}>{item.comment}</div>

                <div className={"modal-comment__addition-info"}>
                    <div className={"modal-comment__manager"}>
                        {item.manager.name} {item.manager.surname}
                    </div>
                    <div className={"modal-comment__date"}>{convertDate(item.created_at)}</div>
                </div>
            </div>
        </div>
    );
};

export {ModalComment};
