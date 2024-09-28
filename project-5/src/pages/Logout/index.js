import { useEffect } from "react";
import { deleteAllCookies, getCookie } from "../../helpers/cookie"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../action";

function LogOut(){
    const navigate = useNavigate();
    const token = getCookie("token");
    const dispatch = useDispatch();
    deleteAllCookies();

    useEffect(() => {
        dispatch(checkLogin(false));
        navigate("/login");
    },[])

    
    return (
        <>
        page LogOut
        </>
    )
}
export default LogOut