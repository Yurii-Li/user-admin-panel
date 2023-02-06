import { LogOut } from "../LogOut/LogOut";

import "./header.scss";

const Header = () => {
    return (
        <header className={"header"}>
            <div className={"header__logo"}> Logo</div>
            <div>
                <LogOut />
            </div>
        </header>
    );
};

export { Header };
