import React, { useState } from "react";

const SimpleFormHooks = () => {
  let [msg, setMsg] = useState("Hello");

  let [earlyval, setEarlyVal] = useState({ defaultVal: "Message" });

  let updateHandler = () => {
    setEarlyVal({ defaultVal: "Update message" });
  };

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
      <button onClick={updateHandler}>
        UpdateValue: {earlyval.defaultVal}
      </button>
    </div>
  );
};

export default SimpleFormHooks;
