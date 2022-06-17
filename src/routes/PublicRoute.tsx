// import * as ROUTES from '../constants/routes'
import { Route } from "react-router-dom";
// import Navbar from '../Components/ui/Navbar'
// import Footer from '../Components/ui/Footer'
// import { connect } from "react-redux";
import NavAndSidebar from "../components/navbar/NavAndSidebar";
import Footer from "../components/footer";

const isAuthenticated = true;
const PublicRoute = ({
  // isAuth,
  // role,
  // component: Component,
  // path,
  // ...rest
  element,
  path,
}: any) => {
  return (
    <Route
      path={path}
      // render={(props) => {
      //   // if (isAuthenticated === false) {
      //   //   return <Redirect to="/login" />;
      //   // }

      //   // if (isAdmin === true && user.role !== "admin") {
      //   //   return <Redirect to="/login" />;
      //   // }

      //   return <Element {...props} />;
      // }
      // }
      element
    />
  );
};

export default PublicRoute;

// const mapStateToProps = ({ auth }) => ({
//   isAuth: !!auth,
//   role: auth?.role || "",
// });

// export default connect(mapStateToProps)(PublicRoute);
