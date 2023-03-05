import "./modalComments.scss";
import {ModalComment} from "../ModalComment/ModalComment";

const ModalComments = ({ comments, setOpenModalComments }) => {
    return (
        <div className={"modal-comments"}>
            <div>{comments.length === 0 ? "null" : comments.map((item) => <ModalComment key={item.id} item={item} />).reverse()}</div>
            <button className={"modal-comments__button"} onClick={() => setOpenModalComments(false)}>Close</button>

        </div>
    );
};

export {ModalComments};
