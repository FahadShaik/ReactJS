// i wanna inject the text good morning from my js into that div
// traditional manner
// document.getElementById("root").innerHTML = "Gm";

// i wanna inject the same thing from react
import ReactDOM from "react-dom";
// import FirstComponent from "./FirstComponent";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root")); // react 17
