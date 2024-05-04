import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar"

const AuthLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default AuthLayout