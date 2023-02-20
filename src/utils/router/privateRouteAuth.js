import {Navigate, Outlet} from "react-router-dom";

const PrivateRouteAuth = () => {
    return (
        localStorage.getItem("access") ? <Outlet /> : <Navigate to={"/login"} />
    );
};

export {PrivateRouteAuth};
