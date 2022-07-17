import React from "react";
import { useSelector } from "react-redux";
import "./__approvalMsg.scss";

const ApprovalMsg = () => {
  const { user } = useSelector((state) => state.user);
  // const { role } = useSelector((state) => state.role);
  return (
    <>
      {user && (
        <>
          {(user.role === "subscriber" || user?.role === undefined) && (
            <div className="approvalMsg">
              You have no approval. Please contact your department for approval.
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ApprovalMsg;
