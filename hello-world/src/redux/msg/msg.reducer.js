import { GM, GN } from "./msg.action";

let initState = { msg: "Hello World" };

let msgReducer = (state = initState, action) => {
  switch (action.type) {
    case GM:
      return { msg: "Good Morning" };
    case GN:
      return { msg: "Good night" };
    default:
      return state;
  }
};

export { msgReducer };
