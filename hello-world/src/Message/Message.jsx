import React from "react";
import { gmAction, gnAction } from "../redux/msg/msg.action";
import { useDispatch, useSelector } from "react-redux";

const Message = () => {
  let dispatch = useDispatch();

  let gmHandler = () => {
    dispatch(gmAction());
  };

  let gnHandler = () => {
    dispatch(gnAction());
  };

  let msgState = useSelector((state) => {
    console.log(state);
    return state;
  });

  return (
    <div>
      <h2>Message Comp</h2>
      <pre>{JSON.stringify(msgState.msg)}</pre>
      Value : {msgState.msg}
      <br />
      <button onClick={gmHandler}>GM</button>
      <button onClick={gnHandler}>GN</button>
    </div>
  );
};

export default Message;
