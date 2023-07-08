import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from "../providers/UserContext/UserContext"

export const ProtectorRoutes = () => {
    const { user } = useContext(UserContext)

    return user?.user ? <Outlet /> : <Navigate to="/login" />
}