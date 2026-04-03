import React from "react";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import CanVote from "./components/CanVote";
import Home from "./components/Home";
import "./App.css";

const App = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/can-vote");
  };
  const id = 999;
  return (
    <div>
      <Routes>
        <Route path="/can-vote" element={<CanVote />}>
          <Route path="a1" element={<div>a1 naam hai mera!</div>} />
          <Route path="a2" element={<div>a2 naam hai mera!</div>} />
        </Route>
        <Route path="/:id" element={<Home />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Link to={`/${id}`}>id10</Link>
    </div>
  );
};
export default App;


80>90 ? "sahi hai": "galat hai"
