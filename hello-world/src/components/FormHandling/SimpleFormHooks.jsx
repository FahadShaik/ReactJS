import React, { useState } from "react";

const SimpleFormHooks = () => {
  let [msg, setMsg] = useState("Hello");

  return (
    <div>
      <h1>Msg Component</h1>
      <h2>Value: {msg}</h2>
      <button
        onClick={() => {
          setMsg("GM");
        }}
      >
        GM
      </button>
      <button
        onClick={() => {
          setMsg("GE");
        }}
      >
        GN
      </button>
    </div>
  );
};

export default SimpleFormHooks;
