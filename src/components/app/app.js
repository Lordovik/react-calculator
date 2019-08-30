import React from "react";
import CalcInput from "../calc-input";
import Numbers from "../numbers";
import Signs from "../signs";
import Result from "../result";
import "./app.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "0",
      result: 0,
      sign: ""
    };
    const signsString = "- + * / =".split(" ");

    this.setResult = (btn) => {
      if (signsString.some((item) => item === btn)) {
        const currRes = this.state.result;
        const input = this.state.inputValue;
        const currSign = this.state.sign;
        let newRes = "";
        switch (currSign) {
          case "+":
            newRes = +currRes + +input;
            break;
          case "-":
            newRes = +currRes - +input;
            break;
          case "*":
            newRes = +currRes * +input;
            break;
          case "/":
            newRes = +currRes / +input;
            break;
          case "=":
          case  "":
            newRes = input;
            break;
        }
        this.setState({inputValue: "0", result: newRes, sign: btn});
      }
    }

    this.putNumber = (key) => {
      const oldVal = this.state.inputValue === "0"
        ? ""
        : this.state.inputValue;
      let newVal = oldVal;
      if (Number.isInteger(+ key)) {
        newVal = oldVal + key + '';
      } else if (key === "Backspace") {
        newVal = oldVal.slice(0, -1);
      }

      if (newVal === "")
        newVal = "0";
      if (newVal.length <= 16)
        this.setState({inputValue: newVal});
      };

    this.onPress = (btn) => {
      if ((+ btn >= 0 && + btn <= 9) || btn === "Backspace")
        this.putNumber(btn);
      else if (btn === "c")
        this.putNumber("Backspace");
      else if (signsString.some((item) => item === btn)) {
        this.setResult(btn);
      }
    }
  }

  render() {
    const val = this.state.inputValue;
    const result = this.state.result;
    const sign = this.state.sign;

    return (<div className="calc" onKeyDown={(event) => this.onPress(event.key)}>
      <CalcInput inputValue={val}/>
      <Result result={result} sign={sign}/>
      <Numbers onPress={this.onPress}/>
      <Signs onPress={this.onPress}/>
    </div>);
  }
}
