import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(authContext);

  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }
  return (
    <Navigate state={location.pathname} to="/sign-in"></Navigate>
  );
};

export default PrivateRoutes;