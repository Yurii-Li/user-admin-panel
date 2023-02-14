import {ModalForm} from "../ModalForm/ModalForm";
import {useState} from "react";
import {CommentForm} from "../CommentForm/CommentForm";
import {convertDate,ifNull} from "../../helpers";
import {Comment} from "../Comment/Comment";
import {ModalComments} from "../ModalComments/ModalComments";
import {Modal} from "../Modal/Modal";




const Order = ({order}) => {
    const {
        id,
        name,
        surname,
        email,
        phone,
        age,
        course,
        course_format,
        course_type,
        status,
        sum,
        alreadyPaid,
        group,
        created_at,
        manager,
        comments,
        utm,
        msg,
    } = order;


    const [tableActive, setTableActive] = useState(false);

    const [openModalForm, setOpenModalForm] = useState(false);

    const [openModalComments, setOpenModalComments] = useState(false);


    return (
        <div
            className={`orders-table__row  ${openModalForm ? "" : "orders-table__row_hover"} ${tableActive ? "orders-table__row_active" : ""}`}>
            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>{id}</div>
            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>{ifNull(name)}</div>
            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>{ifNull(surname)}</div>
            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>{ifNull(email)}</div>
            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>{ifNull(phone)}</div>
            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>{ifNull(age)}</div>
            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>{ifNull(course)}</div>
            <div className={"orders-table__cell"}
                 onClick={() => setTableActive(!tableActive)}>{ifNull(course_format)}</div>
            <div className={"orders-table__cell"}
                 onClick={() => setTableActive(!tableActive)}>{ifNull(course_type)}</div>
            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>{ifNull(status)}</div>
            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>{ifNull(sum)}</div>
            <div className={"orders-table__cell"}
                 onClick={() => setTableActive(!tableActive)}>{ifNull(alreadyPaid)}</div>
            <div className={"orders-table__cell"}
                 onClick={() => setTableActive(!tableActive)}>{ifNull(group, "name")}</div>
            <div className={"orders-table__cell"}
                 onClick={() => setTableActive(!tableActive)}>{convertDate(ifNull(created_at))}</div>
            <div className={"orders-table__cell"}
                 onClick={() => setTableActive(!tableActive)}>{ifNull(manager, "name")}</div>



            <div className={`orders-table__details ${tableActive ? "orders-table__details_visible" : ""}`}>

                <div className={"orders-table__details-left"}>
                    <div>Message: {ifNull(msg)}</div>
                    <div>UTM: {ifNull(utm)}</div>
                </div>

                <div className={"orders-table__details-right"}>

                    <div className={"orders-table__content"}>

                        <div onClick={()=>setOpenModalComments(true)} className={"orders-table__comments"}>
                            {
                                comments.length === 0 ? "null" : comments.slice(0,3).reverse().map((item) => <Comment key={item.id} item={item}/>)
                            }
                        </div>

                        <CommentForm id={id}/>
                        <ModalComments openModalComments={openModalComments} comments={comments}/>
                    </div>

                    <button onClick={() => setOpenModalForm(true)} className={"orders-table__button"}>Edit</button>
                    <Modal>
                        <ModalForm order={order} openModalForm={openModalForm} setOpenModalForm={setOpenModalForm}/>
                    </Modal>
                </div>

            </div>
        </div>
    );
};

export {Order};

