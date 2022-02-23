import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

//Declarar o root como variável
const root = document.getElementById("root");

const Render = () => {
  return <App />;
};
//Render
ReactDOM.render(<Render />, root);
