import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { login, logout } from "../state/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Components from "./Components.tsx";

const Auth = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isloggedin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login button clicked");
    dispatch(login());
    navigate("/DashboardPage");
  };

  const handleLogout = () => {
    console.log("Logout button clicked");
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className=" font-poppins w-full flex justify-center">
      {isLoggedIn ? (
        <Components
          iconPath="../../public/exit.png"
          text="Logout"
          onClick={handleLogout}
          selected={false}
        />
      ) : (
        <button className=" font-poppins mt-8 px-6 py-3 bg-black w-full rounded text-white hover:bg-[#0c808f]" onClick={handleLogin}>
          Get Started
        </button>
      )}
    </div>
  );
};

export default Auth;
