import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {AdminPage, LoginPage, OrdersPage, Page404} from "./pages";
import {PrivateRoute} from "./utils/router";


function App() {

    return (
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                <Route index element={<Navigate to={"/login"}/>}/>

                <Route path="/login" element={<LoginPage/>}/>

                <Route element={<PrivateRoute/>}>
                    <Route path="/orders" element={<OrdersPage/>}/>
                </Route>


                <Route path="/adminPanel" element={<AdminPage/>}/>


                <Route path="*" element={<Page404/>}/>
            </Route>
        </Routes>
    );
}

export default App;
