import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {ActivateUserPage, AdminPage, LoginPage, OrdersPage, Page404} from "./pages";
import {PrivateRouteAdmin, PrivateRouteAuth} from "./utils/router";


function App() {

    return (
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                <Route index element={<Navigate to={"/login"}/>}/>

                <Route path="/login" element={<LoginPage/>}/>

                <Route element={<PrivateRouteAuth/>}>
                    <Route path="/orders" element={<OrdersPage/>}/>
                </Route>


                <Route element={<PrivateRouteAdmin/>}>
                    <Route path="/adminPanel" element={<AdminPage/>}/>
                </Route>

                <Route path="/activate/:token" element={<ActivateUserPage/>}/>


                <Route path="*" element={<Page404/>}/>
            </Route>
        </Routes>
    );
}

export default App;
