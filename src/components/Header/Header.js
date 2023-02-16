import { LogOut } from "../LogOut/LogOut";

import "./header.scss";
import "../../styles/button.scss";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const {adminProfile} = useSelector((state) => state.adminProfileReducer);


    const navigate = useNavigate();


    return (
        <header className={"header"}>
            <div onClick={()=> navigate("/orders")}  className={"header__logo"}> Logo</div>
            <div className={"header__content"}>
                <div className={"header__name"}>{adminProfile?.profile.name}</div>

                <button className={"button"} onClick={()=> navigate("/adminPanel")} >admin</button>


                <LogOut />
            </div>
        </header>
    );
};

export { Header };
