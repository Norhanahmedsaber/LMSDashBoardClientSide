import { useSelector } from "react-redux";
import { RootState } from "../../state/store"; 
import { Navigate } from "react-router-dom";

const requireAuth = (Component: React.FC) => {
  return () => {
    const isLoggedIn = useSelector((state:RootState) => state.auth.isloggedin);
    return isLoggedIn ? <Component /> : <Navigate to="/" />;
  };
};

export default requireAuth; 
