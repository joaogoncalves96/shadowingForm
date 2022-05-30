import { Navigate } from "react-router-dom";
import UseUserState from "./UseUserState";


const PrivateRoute = ({ children }) => {
const UserState = UseUserState();
  if(!UserState.isloggedin){
    return <Navigate to="/" replace />;
  } 
  return children;
};




export default PrivateRoute;