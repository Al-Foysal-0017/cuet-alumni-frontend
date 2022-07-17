import React, { useEffect } from "react";
import Navigation from "../../components/adminNabSidebar/Navigation";
import Container from "../../components/container/Container";
// import TableAllRequest from "../../layout-admin/allRequests/table";
// import PaginationTable from "../../layout-admin/allRequests/table/Pagination";
// import ReactTable from "../../react-table";
import "./__allRequest.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../store/actions/userAction";
import Table from "./Table";
// import Loader from "../../components/Loader/Loader";

const AllRequestsAdmin = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.usersRequest);

  const filterSubscriber = users.filter((subs) => subs.role === "subscriber");

  // eslint-disable-next-line
  // const approveHandler = (id) => {
  //   dispatch(updateUser(id, { role: "student" }));
  //   dispatch(getAllUsers());
  // };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <Navigation>
        {users.length === 0 && loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="adminDashboard">
            <Container>
              <Table users={filterSubscriber} />
            </Container>
          </div>
        )}
      </Navigation>
      {/* )} */}
    </>
  );
};

export default AllRequestsAdmin;
