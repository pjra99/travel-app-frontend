import React from "react";
import { useState } from "react";
import Context from "./context.js";

const States = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeLogStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <Context.Provider
      value={{
        isLoggedIn,
        changeLogStatus,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default States;
