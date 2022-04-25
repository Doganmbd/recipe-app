import { Navigate, Outlet } from "react-router-dom"


const PrivateRouter = () => {

    const privateUser = JSON.parse(sessionStorage.getItem("user"))


  return privateUser ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateRouter