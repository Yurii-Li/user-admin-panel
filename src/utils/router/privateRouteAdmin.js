import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";

import {Page404} from "../../pages";
import {adminProfileActions} from "../../redux/slices";



const PrivateRouteAdmin = () => {

    const dispatch = useDispatch();
    const {adminProfile, loading} = useSelector((state) => state.adminProfileReducer);

    useEffect(() => {
        if (!adminProfile ) {
            dispatch(adminProfileActions.getAdminProfile());
        }
    }, [dispatch, adminProfile]);


    if (loading) {
        return null;
    }


    return (
        adminProfile?.is_superuser ? <Outlet /> : <Page404 />
    );
};

export {PrivateRouteAdmin};
