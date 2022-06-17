import React, { useEffect } from "react";
import Navigation from "../../components/adminNabSidebar/Navigation";
import Container from "../../components/container/Container";
// import TableAllRequest from "../../layout-admin/allRequests/table";
// import PaginationTable from "../../layout-admin/allRequests/table/Pagination";
// import ReactTable from "../../react-table";
import "./__allRequest.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, updateUser } from "../../store/actions/userAction";
// import Loader from "../../components/Loader/Loader";

const AllRequestsAdmin = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.usersRequest);

  const approveHandler = (id) => {
    dispatch(updateUser(id, { role: "student" }));
    dispatch(getAllUsers());
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <Navigation>
        {users.length === 0 && loading && <h1>Loading...</h1>}
        <div className="adminDashboard">
          <Container>
            <h1>ALL REQUESTS</h1>
            {/* <TableAllRequest users={users} /> */}
            {/* <PaginationTable /> */}
            {/* <ReactTable /> */}
            {users.map((item, index) => (
              <div key={index}>
                <span>{item.first_name}</span>
                <span>{item.last_name}</span>
                <span>{item.email}</span>
                <span>{item.department}</span>
                <span>{item.batch}</span>
                <span>{item.role}</span>
                <button
                  onClick={() => {
                    approveHandler(item._id);
                  }}
                >
                  Approve
                </button>
              </div>
            ))}
          </Container>
        </div>
      </Navigation>
      {/* )} */}
    </>
  );
};

export default AllRequestsAdmin;
