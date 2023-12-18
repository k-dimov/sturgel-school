import { useNavigate } from "react-router-dom";
import { logout } from "../../api/userApi";
import { useEffect } from "react";

function Logout({ logoutHandler }) {
    const navigate = useNavigate();

    useEffect(() => {
        logout()
            .then(() => {
                logoutHandler();
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                navigate('/')
            })
    }, []);
}

export default Logout;
