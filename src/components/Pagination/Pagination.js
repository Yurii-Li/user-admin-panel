import classnames from "classnames";

import { DOTS, usePagination } from "../../hooks";

import "./pagination.scss";

import arrowBack from "../../resources/img/arrow-back.svg";
import arrowForward from "../../resources/img/arrow-forward.svg";

const Pagination = (props) => {
    const { onPageChange, totalCount, siblingCount = 2, currentPage, pageSize } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul className={"pagination"}>
            <li
                className={classnames("pagination__item", {
                    disabled: currentPage === 1,
                })}
                onClick={onPrevious}
            >
                <img src={arrowBack} className="pagination__arrow" alt={"arrow-back"} />
            </li>
            {paginationRange.map((pageNumber, i) => {
                if (pageNumber === DOTS) {
                    return (
                        <li key={i} className="pagination__item dots">
                            &#8230;
                        </li>
                    );
                }

                return (
                    <li
                        className={classnames("pagination__item", {
                            selected: pageNumber === currentPage,
                        })}
                        onClick={() => onPageChange(pageNumber)}
                        key={i}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={classnames("pagination__item", {
                    disabled: currentPage === lastPage,
                })}
                onClick={onNext}
            >
                <img src={arrowForward} className="pagination__arrow" alt={"arrow-forward"} />
            </li>
        </ul>
    );
};

export { Pagination };
