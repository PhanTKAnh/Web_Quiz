import { login } from "../../services/usersSevies";
import "./login.scss";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../helpers/cookie";
import {useDispatch} from "react-redux"
import { checkLogin } from "../../action";

function Login() {
    const navigate = useNavigate();
    const dispatch =useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        const response = await login(email, password);

        if (response.length > 0) {
            setCookie("id", response[0].id, 1);
            setCookie("fullName", response[0].fullName, 1);
            setCookie("email", response[0].email, 1);
            setCookie("password", response[0].password, 1);
            setCookie("token", response[0].token, 1);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Đăng nhập thành công",
                showConfirmButton: false,
                timer: 1000,
            });

            setTimeout(() => {
                navigate("/", { replace: true });
                dispatch(checkLogin(true));
            }, 1000);
           
        } else {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Đăng nhập thất bại",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <>
            <div className="login"> 
                <form onSubmit={handleSubmit} > 
                <h2 className="login__title">Login Account</h2>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Nhập vào email"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Nhập vào mật khẩu"
                            required
                        />
                    </div>
                    <div className="login__button">
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
