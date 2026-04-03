import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const { id } = useParams();
  return (
    <>
      <div>About</div>
      <button onClick={handleClick}>Move to Home </button>
      <h1>{id}</h1>
    </>
  );
};

export default About;
