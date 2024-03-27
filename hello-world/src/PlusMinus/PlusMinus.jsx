import React from "react";
import { incrAction, decrAction } from "../redux/plusminus/plusminus.action";
import { useDispatch, useSelector } from "react-redux";

const PlusMinus = () => {
  let dispatch = useDispatch();

  let plusminus = useSelector((state) => {
    console.log(state);
    return state;
  });

  console.log(plusminus);
  return (
    <div>
      <pre>{JSON.stringify(plusminus)}</pre>
      <button
        onClick={() => {
          dispatch(decrAction());
        }}
      >
        -
      </button>
      {plusminus.qty}

      <button
        onClick={() => {
          dispatch(incrAction());
        }}
      >
        +
      </button>
    </div>
  );
};

export default PlusMinus;
