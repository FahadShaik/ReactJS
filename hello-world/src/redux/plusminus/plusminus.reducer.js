import { incr, decr } from "./plusminus.action";

let plusminusReducer = (state = { qty: 1 }, action) => {
  //   console.log(action.type);
  console.log(state);
  console.log(action.type);
  switch (action.type) {
    case incr:
      return { qty: state.qty + 1 };
    case decr:
      return { qty: state.qty - 1 };
    default:
      return state;
  }
};

export { plusminusReducer };
