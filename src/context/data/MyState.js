import React, { useState } from "react";
import MyContext from "./MyContext";

function MyState(props) {
  const [mode, setMode] = useState("light");

  const toggleMode = () => { // Correct the function name to toggleMode
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17,24,39)"; // Fix typo
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"; // Fix typo
    }
  };

  return <MyContext.Provider value={{ mode, toggleMode }}>{props.children}</MyContext.Provider>;
}

export default MyState;
