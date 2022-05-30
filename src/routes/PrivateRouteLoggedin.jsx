import { Navigate } from "react-router-dom";
import UseUserState from './UseUserState';

const PrivateRouteLoggedin = ({ children }) => {
    const UserState = UseUserState();
    if(UserState.isloggedin){
        return <Navigate to="/list" replace />;

    } 
    return children;

    };

    export default PrivateRouteLoggedin;