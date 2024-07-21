import { Navigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({ children, logged, userType }) => {
  console.log("logged", logged);
  const isAuthenticated = logged;
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (isAuthenticated && userType !== "Admin") {
    return <div>You don't have access to this page</div>;
  }

  return children;
};

export default ProtectedRoute;
