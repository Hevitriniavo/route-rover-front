import { Outlet } from "react-router-dom"
import Navigation from "../Navigation"

const NoAuthLayout = () => {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}

export default NoAuthLayout