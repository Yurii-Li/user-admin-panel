import { useSearchParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useDebounce } from "../../hooks";


import {ExcelBtn, FilterOrders, Footer, Header, OrdersTable, Pagination, Spinner} from "../../components";
import {adminProfileActions , ordersActions} from "../../redux/slices";

import "./ordersPage.scss";

const OrdersPage = () => {
    const [query, setQuery] = useSearchParams({ page: "1" });

    const dispatch = useDispatch();

    const debouncedQuery = useDebounce(query, 500);

    const { orders, totalCount, loading } = useSelector((state) => state.ordersReducer);


    useEffect(() => {
        dispatch(ordersActions.getOrdersByFilter(debouncedQuery));
    }, [dispatch, debouncedQuery]);

    useEffect(() => {
        dispatch(adminProfileActions.getAdminProfile());
    }, [dispatch]);

    const setParams = (e) => {
        const text = e.target.value;
        const name = e.target.name;

        if (!text) {
            setQuery((value) => {
                value.delete(name);
                return value;
            });
        } else if (name === "reset" && text === "reset") {
            setQuery({
                page: "1",
                order: "-id",
            });
        } else {
            setQuery((value) => {
                value.set(name, text);
                value.set("page", "1");
                return value;
            });
        }
    };

    const sortByField = (field) => {
        setQuery((value) => {
            if (value.get("order") === field) {
                value.set("order", `-${field}`);
            } else {
                value.set("order", field);
            }
            value.set("page", "1");
            return value;
        });
    };

    return (
        <div className={"orders-page"}>
            <Header />

            <div className={"orders-page__management"}>
                <FilterOrders setParams={setParams} />
                <ExcelBtn />
            </div>


            <div className={"orders-page__content"}>
                {loading ? (
                    <Spinner />
                ) : (
                    <div>
                        <OrdersTable orders={orders} sortByField={sortByField} />

                        <Pagination
                            currentPage={+query.get("page")}
                            totalCount={totalCount}
                            pageSize={25}
                            onPageChange={(page) =>
                                setQuery((value) => {
                                    value.set("page", page);
                                    return value;
                                })
                            }
                        />
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};


export {OrdersPage};
