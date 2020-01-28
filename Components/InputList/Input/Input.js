import React from "react";

export default function Input(props) {
  /**
   * Function to render input component depending upon the input type
   */
  function render() {
    /**
     * props contain the input type, index, handleChange function and item where item is an object which has two keys
     * 1--> name of the input
     * 2--> active - status of selection
     */
    const { item, inputType, index, handleChange } = props;
    switch (inputType) {
      case "button":
        return (
          <div key={`button-${index}`}>
            <button onClick={() => handleChange(index)}>{item}</button>
          </div>
        );
      case "checkbox":
        return (
          <div key={`checkbox-${index}`}>
            <label>
              <input type="checkbox" onChange={() => handleChange(index)} />
              {item}
            </label>
          </div>
        );
    }
  }
  return <div>{render()}</div>;
}
