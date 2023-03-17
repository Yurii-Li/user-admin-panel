import { useState } from "react";

import { convertDate, ifNull } from "../../utils/helpers";
import { CommentForm } from "../CommentForm/CommentForm";
import { Comment } from "../Comment/Comment";
import { ModalComments } from "../ModalComments/ModalComments";
import { ClientForm } from "../СlientForm/СlientForm";
import { Modal } from "../Modal/Modal";
import {useSelector} from "react-redux";

const Order = ({ order }) => {
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

    const { adminProfile } = useSelector((state) => state.adminProfileReducer);

    const isButtonDisabled = manager !== null && adminProfile?.profile.name !== manager?.name;

    console.log(comments);

    return (
        <div
            className={`orders-table__row  ${
                openModalForm || openModalComments || tableActive ? "" : "orders-table__row_hover"
            } ${tableActive ? "orders-table__row_active" : ""}`}
        >
            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>
                {id}
            </div>

            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>
                {ifNull(name)}
            </div>

            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>
                {ifNull(surname)}
            </div>

            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>
                {ifNull(email)}
            </div>

            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>
                {ifNull(phone)}
            </div>

            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>
                {ifNull(age)}
            </div>

            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>
                {ifNull(course)}
            </div>

            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>
                {ifNull(course_format)}
            </div>

            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>
                {ifNull(course_type)}
            </div>

            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>
                {ifNull(status)}
            </div>

            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>
                {ifNull(sum)}
            </div>

            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>
                {ifNull(alreadyPaid)}
            </div>

            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>
                {ifNull(group, "name")}
            </div>

            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>
                {convertDate(ifNull(created_at))}
            </div>

            <div className={"orders-table__cell"} onClick={() => setTableActive(!tableActive)}>
                {ifNull(manager, "name")}
            </div>

            <div className={`orders-table__details ${tableActive ? "orders-table__details_visible" : ""}`}>
                <div className={"orders-table__details-left"}>
                    <div>Message: {ifNull(msg)}</div>
                    <div>UTM: {ifNull(utm)}</div>
                </div>

                <div className={"orders-table__details-right"}>
                    <div className={"orders-table__content"}>
                        {
                            comments.length > 0 && (
                                <div onClick={() => setOpenModalComments(true)} className={"orders-table__comments"}>
                                    {comments.slice(0,3)
                                        .map((item) => <Comment key={item.id} item={item} />)
                                    }
                                </div>
                            )
                        }

                        <CommentForm id={id} isButtonDisabled={isButtonDisabled} adminProfile={adminProfile}/>
                    </div>

                    <button onClick={() => setOpenModalForm(true)} className={`orders-table__button ${isButtonDisabled ? "orders-table__button_disabled" : ""}`} disabled={isButtonDisabled}>
                        Edit
                    </button>

                    <Modal closeModal={setOpenModalComments} openModal={openModalComments}>
                        <ModalComments comments={comments} setOpenModalComments={setOpenModalComments} />
                    </Modal>

                    <Modal closeModal={setOpenModalForm} openModal={openModalForm}>
                        <ClientForm order={order} setOpenModalForm={setOpenModalForm} />
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export {Order};

