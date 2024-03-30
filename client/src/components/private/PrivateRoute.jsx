import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { SIGNIN } from "../../router/Router";
const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to={SIGNIN} />;
};

export default PrivateRoute;
