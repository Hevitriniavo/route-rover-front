import { createBrowserRouter } from "react-router-dom";
import NoAuthLayout from "../components/layouts/NoAuthLayout";
import AuthLayout from "../components/layouts/AuthLayout";
import noAuthRoutes from "./noAuthRoute";
import authRoutes from "./authRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <NoAuthLayout />,
        children: noAuthRoutes
    }, {
        path: "/admin",
        element: <AuthLayout />,
        children: authRoutes
    }
]);
export default router;