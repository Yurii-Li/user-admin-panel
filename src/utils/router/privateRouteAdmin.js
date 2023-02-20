import {useSelector} from "react-redux";
import {Outlet} from "react-router-dom";
import {Page404} from "../../pages";


const PrivateRouteAdmin = () => {

    const {adminProfile} = useSelector((state) => state.adminProfileReducer);

    return (
        adminProfile?.is_superuser ? <Outlet /> : <Page404 />
    );
};

export {PrivateRouteAdmin};
