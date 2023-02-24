import { Order } from "../Order/Order";
import { SortOrders } from "../SortOrders/SortOrders";

import "./ordersTable.scss";

const OrdersTable = ({ orders, sortByField }) => {
    return (
        <div className={"orders-table"}>
            <SortOrders sortByField={sortByField} />

            {orders.map((order) => (
                <Order order={order} key={order.id} />
            ))}
        </div>
    );
};

export { OrdersTable };
