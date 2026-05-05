import React, { useContext } from "react";
import { MyContext } from "./context";

function Child() {
  const data = useContext(MyContext);

  return (
    <div>
      <h2>This is the Child Component</h2>
      <p>{data}</p>
    </div>
  );
}

export default Child;
