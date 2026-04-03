import React from "react";
import { Outlet } from "react-router-dom";

const CanVote = () => {
  return (
    <>
      <div>CanVote</div>
      <Outlet />
    </>
  );
};

export default CanVote;
