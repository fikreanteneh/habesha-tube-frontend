import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { Spinner } from "./Spinner"

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({routeType}) => {

  const {authStatus} = useSelector(state => state.auth)

  if (authStatus == "loading") {
    return <Spinner/>
  }
  
  const routeTypes = {
    "private" : authStatus == "authenticated" ? <Outlet/> : <Navigate to="/signin"/>,
    "public": authStatus != "authenticated" ? <Outlet/> : <Navigate to="/"/>
  }

   return routeTypes[routeType]

}