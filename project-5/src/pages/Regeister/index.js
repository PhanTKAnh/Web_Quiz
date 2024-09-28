
import { useNavigate } from "react-router-dom";
import { generateToken } from "../../helpers/generateToken";
import { checkExits, register } from "../../services/usersSevies";
import "./register.scss"
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";


function Register() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        const checkExitEmail = await checkExits("email", email);
        if (checkExitEmail.length > 0) {
            Swal.fire({
                title: "Email Đã được đăng ký",
                text: "Xin vui long nhập lại thông tin",
                icon: "question"
            });

        } else {
            const option = {
                fullName: fullName,
                email: email,
                password: password,
                token: generateToken()
            }
            const response = await register(option);
            if (response) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Đăng ký tài khoản thành công",
                    showConfirmButton: false,
                    timer: 1000,
                });

                setTimeout(() => {
                    navigate("/login", { replace: true });
                }, 1000);
            } 



        }
    }

        return (
            <>
                <form onSubmit={handleSubmit}>
                    <div className="register">
                        <h2 className="register__title">Register Account</h2>
                        <div>
                            <input type="text" name="fullName" placeholder="FullName" required />
                        </div>
                        <div>
                            <input type="email" name="email" placeholder="Email" required />
                        </div>
                        <div>
                            <input type="text" name="password" placeholder="Password" required />
                        </div>
                        <div className="register__button">

                            <input type="submit" value="Register" />
                        </div>
                    </div>
                </form>
            </>
        )

    }
    export default Register