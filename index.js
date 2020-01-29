import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const InputList = {
  inputList: ["red", "green"],
  inputType: "button"
};

export default function inputList(inputList) {
  const inputCheck =
    inputList === undefined ? (
      <h1>Please provide input List with input Type</h1>
    ) : (
      <App input={inputList} />
    );

  return ReactDOM.render(inputCheck, document.getElementById("root"));
}
