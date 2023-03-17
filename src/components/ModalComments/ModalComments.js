import "./modalComments.scss";
import {ModalComment} from "../ModalComment/ModalComment";
import {useMemo, useState} from "react";
import {Pagination} from "../Pagination/Pagination";

let PageSize = 5;

const ModalComments = ({ comments, setOpenModalComments }) => {

    const [currentPage, setCurrentPage] = useState(1);

    const currentComments = useMemo(()=>{
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return comments.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <div className={"modal-comments"}>
            <div>{currentComments.map((item, index) => {
                    return <ModalComment key={index} item={item}/>
                })
            }

            </div>

            <div className={"modal-comments__controls"}>
                <div className={"modal-comments__pagination"}>
                    <Pagination currentPage={currentPage} totalCount={comments.length} pageSize={PageSize} onPageChange={page => setCurrentPage(page)}/>
                </div>
                <button className={"modal-comments__button"} onClick={() => setOpenModalComments(false)}>Close</button>
            </div>

        </div>
    );
};

export {ModalComments};
