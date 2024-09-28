import PrivateRoute from "../components/PrivateRoute";
import LayoutDefault from "../layout/LayoutDefault";
import Resgister from "../pages/Regeister";
import Home from "../pages/Home";
import Topic from "../pages/Topic"
import Answers from "../pages/Answers"
import Quiz from "../pages/Quiz"
import Result from "../pages/Result"
import LogOut from "../pages/Logout";
import Login from "../pages/Login";
export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "register",
                element: <Resgister />
            },
            {
                path: "logout",
                element: <LogOut/>
            },
            {
                element: <PrivateRoute />,
                children: [
                    {
                        path: "topic",
                        element: <Topic/>
                    },
                    {
                        path: "answers",
                        element: <Answers/>
                    },
                    {
                        path: "quiz/:id",
                        element: <Quiz/>
                    },
                    {
                        path: "result/:id",
                        element: <Result/>
                    }
                ]

            }
        ]
    }
]