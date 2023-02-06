import "./page404.scss";

import img from "../../resources/img/404.svg";

const Page404 = () => {
    return (
        <div className={"page404"}>
            <img className={"page404__img"} src={img} alt={"404"}/>
        </div>
    );
};

export {Page404};
