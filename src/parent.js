import React from "react";
import { MyContext } from "./context";
import Child from "./child";

function Parent() {
  const message = "Hello Context API 🚀";

  return (
    <MyContext.Provider value={message}>
      <h1>Parent Component</h1>
      <Child />
    </MyContext.Provider>
  );
}

export default Parent;

