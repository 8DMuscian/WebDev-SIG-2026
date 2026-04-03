import React from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

import { useRef } from "react";

const App = () => {
  const inpRef = useRef();
  console.log("inpRef", inpRef);
  return (
    <>
      <input
        style={{ fontSize: "90px", width: "300px" }}
        type="text"
        ref={inpRef}
      />
      <button onClick={() => inpRef.current.focus()}>Focus</button>
    </>
  );
};

export default App;
