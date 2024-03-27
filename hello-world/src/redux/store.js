import { createStore } from "redux";
// import { msgReducer } from "./msg/msg.reducer";
import { plusminusReducer } from "./plusminus/plusminus.reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(plusminusReducer, composeWithDevTools());

export { store };
