import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = () => {
    return (
        localStorage.getItem("access") ? <Outlet /> : <Navigate to={"/login"} />
    );
};

export {PrivateRoute};
