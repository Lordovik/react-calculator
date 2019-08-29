import React from "react";
import "./result.css";

export default class Result extends React.Component {
  render() {
    const res = this.props.result;
    const sign = this.props.sign;
    return <p className="result">{sign+""+res}</p>;
  }
}
