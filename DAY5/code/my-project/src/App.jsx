import React, { useState } from "react";
import SinglePost from "./components/SinglePost";
import { Routes, Route, Link, useNavigate, NavLink } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
const App = () => {
  const id = 10;

  return (
    <>
      <Routes>
        <Route path="/" element={<SinglePost />}>
          <Route path="home" element={<>Home agya</>} />
        </Route>
        <Route path={"/about/:id"} element={<About />} />
      </Routes>
      {/* navBar */}
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={`/about/${id}`}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <button onClick={handleClick}>Move to Home</button> */}
    </>
  );
};

export default App;
