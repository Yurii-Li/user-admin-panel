

const SortOrders = ({ sortByField }) => {
    return (
        <div className={"orders-table__row orders-table__header"}>
            <div className={"orders-table__cell"} onClick={() => sortByField("id")}>id</div>
            <div className={"orders-table__cell"} onClick={() => sortByField("name")}>name</div>
            <div className={"orders-table__cell"} onClick={() => sortByField("surname")}>surname</div>
            <div className={"orders-table__cell"} onClick={() => sortByField("email")}>email</div>
            <div className={"orders-table__cell"} onClick={() => sortByField("phone")}>phone</div>
            <div className={"orders-table__cell"} onClick={() => sortByField("age")}>age</div>
            <div className={"orders-table__cell"} onClick={() => sortByField("course")}>course</div>
            <div className={"orders-table__cell"} onClick={() => sortByField("course_format")}>course_format</div>
            <div className={"orders-table__cell"} onClick={() => sortByField("course_type")}>course_type</div>
            <div className={"orders-table__cell"} onClick={() => sortByField("status")}>status</div>
            <div className={"orders-table__cell"} onClick={() => sortByField("sum")}>sum</div>
            <div className={"orders-table__cell"} onClick={() => sortByField("alreadyPaid")}>alreadyPaid</div>
            <div className={"orders-table__cell"} onClick={() => sortByField("group")}>group</div>
            <div className={"orders-table__cell"} onClick={() => sortByField("created_at")}>created_at</div>
            <div className={"orders-table__cell"} onClick={() => sortByField("manager")}>manager</div>
        </div>
    );
};

export {SortOrders};
