import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { usersActions } from "../../redux/slices";
import { ifNull } from "../../utils/helpers";

import "./userStatistic.scss";

const UserStatistic = ({ id }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersActions.userStatistic(id));
    }, []);

    const { userStatistic } = useSelector((state) => state.usersReducer);

    return (
        <div className={"user-statistic"}>
            <div className={"user-statistic__item"}> total: {userStatistic[id]?.total_count}</div>
            {userStatistic[id]?.statuses.map((item, index) => (
                <div className={"user-statistic__item"} key={index}>
                    {ifNull(item.status)}: {item.count}
                </div>
            ))}
        </div>
    );
};

export {UserStatistic};
