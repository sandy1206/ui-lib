import React, { Component } from "react";
// import Input from "./Input";

class InputList extends Component {
  constructor(props) {
    /**
     *@props must contain two keys:
     * 1--> array of values to be rendered
     * 2--> type of input to be displayed such as button, checkbox etc
     */
    super(props);
    this.state = {
      /**
       * @state contains an array of inputList items in which
       * each array element has two prroperties
       * 1--> name
       * 2--> active (to check element is selected or not)
       */
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const items = this.props.inputList.map(name => {
      /**
       * converting each @name of inputList array to an object with added property - @active
       */
      return {
        name,
        active: false
      };
    });
    this.setState({ items });
  }

  handleChange(index) {
    const { items } = this.state;
    const newItem = { ...items[index] };
    newItem.active = !newItem.active;
    const newItems = [
      /**
       * adding @newItem into a copy of the @items array
       */
      ...items.slice(0, index),
      newItem,
      ...items.slice(index + 1, items.length)
    ];
    this.setState({ items: newItems }, () => console.table(this.state.items));
  }

  render() {
    return (
      // <div className="row">
      //   {this.state.items.map((item, index) => {
      //     return (
      //       <Input
      //         index={index}
      //         item={item.name}
      //         active={item.active}
      //         inputType={this.props.inputType}
      //         key={index}
      //         handleChange={this.handleChange}
      //       />
      //     );
      //   })}
      // </div>
      "SDfgdsf"
    );
  }
}

export default InputList;
