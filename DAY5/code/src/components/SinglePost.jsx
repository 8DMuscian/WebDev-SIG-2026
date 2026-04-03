import React from "react";
import { LoginContext } from "../App";
import { useContext } from "react";
const SinglePost = () => {
  const loginStatus = useContext(LoginContext);
  return (
    <>
      <div style={{ color: loginStatus ? "green" : "red" }}>Single Post</div>
    </>
  );
};

export default SinglePost;
