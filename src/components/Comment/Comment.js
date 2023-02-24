import { convertDate, sliceText } from "../../utils/helpers";

import "./comment.scss";

const Comment = ({ item }) => {
    return (
        <div className={"comment"}>
            <div className={"comment__text"}>{sliceText(item.comment)}</div>

            <div className={"comment__addition-info"}>
                <div className={"comment__manager"}>
                    {item.manager.name} {item.manager.surname}
                </div>
                <div className={"comment__date"}>{convertDate(item.created_at)}</div>
            </div>
        </div>
    );
};

export {Comment};
