import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ordersActions, usersActions } from "../../redux/slices";
import { CreateUserForm, Footer, Header, Modal, OrdersStatistic, Spinner, User } from "../../components";

import "./adminPage.scss";

const AdminPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersActions.getUsers());
        dispatch(ordersActions.getOrdersStatistic());
    }, [dispatch]);

    const { users, loading } = useSelector((state) => state.usersReducer);

    const [openCreateUser, setOpenCreateUser] = useState(false);

    return (
        <div className={"admin-page"}>
            <Header />

            <div className={"admin-page__content"}>
                {loading ? (
                    <Spinner />
                ) : (
                    <div>
                        <div className={"admin-page__statistic"}>
                            <div className={"admin-page__title"}>Orders statistic</div>
                            <OrdersStatistic />
                        </div>

                        <button className={"admin-page__button"} onClick={() => setOpenCreateUser(true)}>
                            Create
                        </button>

                        <div className={"admin-page__users"}>
                            {users.map((user) => (
                                <User key={user.id} user={user} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <Modal closeModal={setOpenCreateUser} openModal={openCreateUser}>
                <CreateUserForm setOpenCreateUser={setOpenCreateUser} />
            </Modal>

            <Footer />
        </div>
    );
};

export {AdminPage};
