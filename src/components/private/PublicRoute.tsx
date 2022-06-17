// import { useSelector } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';
// const RouteLinks = (props) => {
// 	const { user } = useSelector((state) => state.AuthReducer);
// 	return user ? (
// 		<Redirect to='/dashboard' />
// 	) : (
// 		<Route path={props.path} exact={props.exact} component={props.component} />
// 	);
// };
// export default RouteLinks;

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }: any) => {
  const { user } = useSelector((state: any) => state.user);
  if (user) {
    return <Navigate to="/profile" replace />;
  }

  return children;
};

export default ProtectedRoute;
