import "./comment.scss"
import {convertDate} from "../../helpers";

const Comment = ({item}) => {
    return (
        <div className={"comment"}>
            <div>{item.comment}</div>
            <div>{convertDate(item.created_at)}</div>
        </div>
    );
};

export {Comment};
