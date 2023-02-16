import {useEffect} from "react";
import {Footer, Header, Spinner, User} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {usersActions} from "../../redux/slices";
import "./adminPage.scss";
import "../../styles/button.scss";
const AdminPage = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(usersActions.getUsers())
    },[])

    const {users, loading} = useSelector((state)=>state.usersReducer);



    return (
        <div className={"admin-page"}>
            <Header />

            <div>
                <button className={"button"}>Create</button>
            </div>

            {
                loading ? <Spinner /> : users.map((user)=> <User key={user.id} user={user}/>)
            }

            <Footer />


        </div>
    );
};

export {AdminPage};
