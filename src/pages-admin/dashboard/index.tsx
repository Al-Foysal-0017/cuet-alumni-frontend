// import SideNav from "../../components/adminNabSidebar/Sidebar";
// import Topbar from "../../components/adminNabSidebar/Topbar";
// // import Container from '../../ui/Container'
// import { useState } from "react";
// import "../../components/adminNabSidebar/style/Navigation.css";
// import Container from "../../components/container/Container";
// import "./__dashboard.scss";

// const Navigation = ({ children }: any) => {
//   const [sideNavOpen, setSideNavOpen] = useState(false);

//   return (
//     <main>
//       <section className="NavigationContainer" style={{ maxWidth: 2000 }}>
//         <div className="NavigationWrapper gridCols5">
//           <SideNav sideNavOpen={sideNavOpen} />
//           <div className="BodyNavigation colSpan4">
//             <Topbar setSideNavOpen={setSideNavOpen} sideNavOpen={sideNavOpen} />
//             {/* <Container> */}
//             <div className="adminDashboard">
//               <Container>
//                 <h1>
//                   NAIEM FOYSAL MY HS HH SH DBB DSD HDH DHSGD HS DH SGD H SD GS
//                   DS DH SDH S SD
//                 </h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//                 <h1>NAIEM FOYSAL</h1>
//               </Container>
//             </div>
//             {/* </Container> */}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Navigation;

import React from "react";
import Navigation from "../../components/adminNabSidebar/Navigation";
import Container from "../../components/container/Container";
import "./__dashboard.scss";

const DashboardAdmin = () => {
  return (
    <Navigation>
      <div className="adminDashboard">
        <Container>
          <h1>DASHBOARD</h1>
        </Container>
      </div>
    </Navigation>
  );
};

export default DashboardAdmin;
