import { useSelector } from "react-redux";

import { ifNull } from "../../utils/helpers";

import "./ordersStatistic.scss";

const OrdersStatistic = () => {
    const { ordersStatistic } = useSelector((state) => state.ordersReducer);

    return (
        <div className={"orders-statistic"}>
            <div className={"orders-statistic__item"}>total: {ordersStatistic?.total_count}</div>
            {ordersStatistic?.statuses.map((item, index) => {
                return (
                    <div className={"orders-statistic__item"} key={index}>
                        {ifNull(item.status)}: {item.count}
                    </div>
                );
            })}
        </div>
    );
};
export { OrdersStatistic };
