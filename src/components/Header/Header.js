import { LogOut } from "../LogOut/LogOut";

import "./header.scss";
import {useSelector} from "react-redux";

const Header = () => {

    const {adminProfile} = useSelector((state) => state.adminProfileReducer);




    return (
        <header className={"header"}>
            <div className={"header__logo"}> Logo</div>
            <div className={"header__content"}>
                <div className={"header__name"}>{adminProfile?.profile.name}</div>
                <LogOut />
            </div>
        </header>
    );
};

export { Header };
