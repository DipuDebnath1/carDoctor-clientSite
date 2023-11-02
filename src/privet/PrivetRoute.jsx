import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivetRoute = ({ children }) => {

    const location = useLocation()
    console.log(location);

    const { loading, user } = useContext(AuthContext)
    if (loading) {
        <div>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    if (user) {
        return children 
    }
    else return <Navigate state={location.pathname} to={'/signin'}></Navigate>
};

export default PrivetRoute;