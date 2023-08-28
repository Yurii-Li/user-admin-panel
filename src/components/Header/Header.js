import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { LogOut } from "../LogOut/LogOut";

import "./header.scss";

import adminImg from "../../resources/img/admin.svg";
import logoImg from "../../resources/img/logo.png";

const Header = () => {
    const { adminProfile } = useSelector((state) => state.adminProfileReducer);

    const navigate = useNavigate();

    return (
        <header className={"header"}>
            <div onClick={() => navigate("/orders")} className={"header__logo"}>
                <img className={"header__logo-img"} src={logoImg} alt="logo" />
            </div>
            <div className={"header__content"}>
                <div className={"header__name"}>{adminProfile?.profile.name}</div>

                <button
                    className={`header__button ${!adminProfile?.is_superuser && "header__button_hidden"}`}
                    onClick={() => navigate("/adminPanel")}
                >
                    <img className={"header__button-img"} src={adminImg} alt="admin" />
                </button>

                <LogOut />
            </div>
        </header>
    );
};

export { Header };
