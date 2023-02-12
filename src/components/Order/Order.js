

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
    } = order;

    const ifNull = (value, objkey = "") => {
        return value ? (typeof value === "object" ? value[objkey] : value) : "null";
    };

    const convertDate = (date) => {
        if (date === "null") return date;

        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        const dateArr = date.split("-");
        const year = dateArr[0];
        const month = months[+dateArr[1] - 1];
        const day = dateArr[2].split("T")[0];

        return `${month} ${day}, ${year}`;
    };

    const handleClick = (e) => {
        e.currentTarget.classList.toggle("orders-table__row_active");
        e.currentTarget.lastElementChild.classList.toggle("orders-table__details_visible");
    };


    return (
        <div className={"orders-table__row  orders-table__row_hover"} onClick={handleClick}>
            <div className={"orders-table__cell"}>{id}</div>
            <div className={"orders-table__cell"}>{ifNull(name)}</div>
            <div className={"orders-table__cell"}>{ifNull(surname)}</div>
            <div className={"orders-table__cell"}>{ifNull(email)}</div>
            <div className={"orders-table__cell"}>{ifNull(phone)}</div>
            <div className={"orders-table__cell"}>{ifNull(age)}</div>
            <div className={"orders-table__cell"}>{ifNull(course)}</div>
            <div className={"orders-table__cell"}>{ifNull(course_format)}</div>
            <div className={"orders-table__cell"}>{ifNull(course_type)}</div>
            <div className={"orders-table__cell"}>{ifNull(status)}</div>
            <div className={"orders-table__cell"}>{ifNull(sum)}</div>
            <div className={"orders-table__cell"}>{ifNull(alreadyPaid)}</div>
            <div className={"orders-table__cell"}>{ifNull(group, "name")}</div>
            <div className={"orders-table__cell"}>{convertDate(ifNull(created_at))}</div>
            <div className={"orders-table__cell"}>{ifNull(manager, "name")}</div>
            <div className={"orders-table__details"}>

                    <div className={"orders-table__details-left"}>
                        <div className={"orders-table__comment"} >
                            <div>Comments: </div>
                            <div>{comments.length === 0 ? "null" : comments.map((item) => `${item.comment}. `)}</div>
                        </div>
                        <div>UTM: {ifNull(utm)}</div>
                    </div>
                <div className={"orders-table__details-right"}>




                </div>

            </div>
        </div>
    );
};

export {Order};

