import { Link, NavLink, Outlet } from "react-router-dom"
import "./LayoutDefault.scss"
import { getCookie } from "../../helpers/cookie";
import { useSelector } from "react-redux";
function LayoutDefault() {
    const token = getCookie("token");
    const isLogin = useSelector(state => state.loginReducer)
    const navLinkActive = (e) => {
        return e.isActive ? "menu__link menu__link--active" : "menu__link";
    }

    return (
        <>
        <div className="layout-default"> 
            <header className="layout-default__header">
                <div className="layout-default__logo"> <NavLink to="/" className="layout-default__logo">QUIZZ</NavLink></div>
                <div className="menu">
                    <ul>
                        
                        <li>
                         <NavLink className={navLinkActive} to="/">Home</NavLink>
                        </li>
                      {token ?(<>
                        <li>
                         <NavLink className={navLinkActive}  to="/topic">Topic</NavLink>
                        </li>
                        <li>
                         <NavLink className={navLinkActive}  to="answers">Answers</NavLink>
                        </li>
                      </>):(<> </>)}
                       
                    </ul>
                </div>
                <div className="menu">
                    <ul>
                        
                      {token ?(
                        <>
                         <li>
                         <NavLink className={navLinkActive} to="logout">Logout</NavLink>
                        </li>
                        </>
                      ):( <>
                      <li>
                          <NavLink className={navLinkActive} to="login">Login</NavLink>
                         </li>
                         <li>
                          <NavLink className={navLinkActive}  to="register">Register</NavLink>
                         </li>
                        </>)}
                       
                    </ul>
                </div>
            </header>
            <main className="layout-default__main">
                <Outlet/>
            </main>
            <footer className="layout-default__footer">
                Copyright @ 2023 by PhanAnh
            </footer>
        </div>
        </>
    )
}
export default  LayoutDefault