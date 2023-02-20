import {convertDate, ifNull} from "../../utils/helpers";
import "./user.scss"

import {usersService} from "../../services";


const User = ({user}) => {




    const activateUser = async () => {
        const {data} = await usersService.getActivateToken(user.id);
        await navigator.clipboard.writeText(`${window.location.origin}/activate/${data}`);
    }




    return (
        <div className={"user"}>
            <div>
                <div>id: {user.profile.id}</div>
                <div>email: {user.email}</div>
                <div>name: {user.profile.name}</div>
                <div>surname: {user.profile.surname}</div>
                <div>is_active: {user.is_active.toString()}</div>
                <div>last_login: {convertDate(ifNull(user.last_login))}</div>
            </div>


            <div>
                <button className={"user__button"} onClick={activateUser}>activate</button>
            </div>

        </div>
    );
};

export {User};
