import { useDispatch } from "react-redux";

import { usersService } from "../../services";
import { usersActions } from "../../redux/slices";
import { convertDate, ifNull } from "../../utils/helpers";
import { UserStatistic } from "../UserStatistic/UserStatistic";

import "./user.scss";


const User = ({ user }) => {
    const dispatch = useDispatch();


    const activateUser = async () => {
        const { data } = await usersService.getActivateToken(user.id);
        await navigator.clipboard.writeText(`${window.location.origin}/activate/${data}`);
    };

    const banUser = () => {
        dispatch(usersActions.banUser(user.id));
    };

    const unbanUser = () => {
        dispatch(usersActions.unbanUser(user.id));
    };

    return (
        <div className={"user"}>
            <div className={"user__info"}>
                    <div>id: {user.profile.id}</div>
                    <div>email: {user.email}</div>
                    <div>name: {user.profile.name}</div>
                    <div>surname: {user.profile.surname}</div>
                    <div>is_active: {user.is_active.toString()}</div>
                    <div>last_login: {convertDate(ifNull(user.last_login))}</div>
            </div>

                <UserStatistic id={user.id} />



            <div className={"user__buttons"}>
                <button className={"user__button"} onClick={activateUser}>
                    activate
                </button>

                <button className={"user__button"} onClick={banUser}>
                    ban
                </button>

                <button className={"user__button"} onClick={unbanUser}>
                    unban
                </button>
            </div>
        </div>
    );
};

export { User };
