import { useNavigate } from "react-router-dom";

import { authService } from "../../services";

import "./logOut.scss";
import "../../styles/button.scss";

const LogOut = () => {
    const navigate = useNavigate();

    const logOut = () => {
        authService.deleteTokens();
        navigate("/login");
    };

    return (
        <button className={"logOut-btn button"} onClick={logOut}>
            Log Out
        </button>
    );
};

export {LogOut};
