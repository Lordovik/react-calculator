import React from 'react';
import "./calc-input.css";

export default class CalcInput extends React.Component {
  render(){
    let val = this.props.inputValue;
    return (
      <div className="calc-input" align="left">
        <span className="calc-input-span">{val}</span>
      </div>
    );
  }
}
