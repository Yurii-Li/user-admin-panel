import "./modalComments.scss"
import {Comment} from "../Comment/Comment";
import {convertDate} from "../../utils/helpers";

const ModalComments = ({comments,setOpenModalComments}) => {
    return (


            <div className={"modal-comments"}>
                <div>
                    {
                        comments.length === 0 ? "null" : comments.map((item) => <View key={item.id} item={item}/>).reverse()
                    }
                </div>
                <button onClick={()=>setOpenModalComments(false)} >Close</button>
            </div>

    );
};

const View = ({item}) => {
    return(
        <div className={"comment"}>
            <div className={"comment__text"} >{item.comment}</div>

            <div className={"comment__addition-info"}>
                <div className={"comment__manager"}>
                    {item.manager.name} {item.manager.surname}
                </div>
                <div className={"comment__date"}>
                    {convertDate(item.created_at)}
                </div>
            </div>

        </div>
    )
}

export {ModalComments};
