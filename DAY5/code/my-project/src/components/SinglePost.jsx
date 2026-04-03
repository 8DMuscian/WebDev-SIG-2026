import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

const SinglePost = () => {
  return (
    <>
      <h1>SIngle Page</h1>
      <Outlet></Outlet>
    </>
  );
};

export default SinglePost;
