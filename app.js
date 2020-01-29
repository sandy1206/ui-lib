import React from "react";

import InputList from "./Components/InputList";
export default function app(props) {
  const { inputList, inputType } = props.input;
  return (
    <div>
      <InputList inputList={inputList} inputType={inputType} />{" "}
    </div>
  );
}
