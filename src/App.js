import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {LoginPage, OrdersPage} from "./pages";


function App() {

    return (
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                <Route index element={<Navigate to={"/login"}/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/orders" element={<OrdersPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
