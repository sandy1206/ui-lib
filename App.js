import React from "react";

import InputList from "./Components/InputList";
export const App = props => {
  const { inputList, inputType, activate, deactivate } = props.input;

  return (
    <div>
      <InputList
        inputList={inputList}
        inputType={inputType}
        activate={activate}
        deactivate={deactivate}
      />
    </div>
  );
};
