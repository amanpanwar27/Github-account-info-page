import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer from "./reducers/index";
import { createStore } from "redux";

const store = createStore(reducer);
ReactDOM.render(<App store={store} />, document.getElementById("root"));
