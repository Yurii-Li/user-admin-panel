import {convertDate, ifNull} from "../../utils/helpers";
import "./user.scss"

const User = ({user}) => {
    return (
        <div className={"user"}>
            <div>id: {user.profile.id}</div>
            <div>email: {user.email}</div>
            <div>name: {user.profile.name}</div>
            <div>surname: {user.profile.surname}</div>
            <div>is_active: {user.is_active.toString()}</div>
            <div>last_login: {convertDate(ifNull(user.last_login))}</div>
        </div>
    );
};

export {User};
