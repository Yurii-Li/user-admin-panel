import { useNavigate } from "react-router-dom";

import { authService } from "../../services";

import "./logOut.scss";

import logOutImg from "../../resources/img/logOut.svg";

const LogOut = () => {
    const navigate = useNavigate();

    const logOut = () => {
        authService.deleteTokens();
        navigate("/login");
    };

    return (
        <button className={"logOut-btn"} onClick={logOut}>
            <img className={"logOut-btn__img"} src={logOutImg} alt="logOut" />
        </button>
    );
};

export {LogOut};
