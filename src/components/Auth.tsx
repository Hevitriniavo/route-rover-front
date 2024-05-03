import { Navigate, Outlet } from "react-router-dom";
import { isAuthentificated } from "../services/auth";

const Auth = () => {
    return isAuthentificated() ? <Outlet /> : <Navigate to="/login" replace />
}


export default Auth;