import Home from "../views/Home";
import PostList from "../views/PostList";
import Login from "../views/Login";
import authRoute from "./authRouter";
import Auth from "../components/Auth";
import Local from "../views/Local";

const routes = [
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/posts",
        element: <PostList />
    },{
        path: "/local",
        element: <Local />
    },
    {
        path: "/dashboard",
        element: <Auth />,
        children: authRoute
    },
    {
        path: "*",
        element: (
            <div>
                Route not found !
            </div>
        )
    },
]

export default routes;