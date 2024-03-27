import React from "react";
// import Message from "./Message/Message";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import PlusMinus from "./PlusMinus/PlusMinus";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <h2>App</h2>
        {/* <Message /> */}
        <PlusMinus />
      </Provider>
    </div>
  );
};

export default App;
