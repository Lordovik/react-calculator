import React from 'react';
import "./signs.css";

export default class Signs extends React.Component {
  render(){
    let signsString = "- + * /".split(" ");
    let signs = [];
    let onPress = this.props.onPress;
    for(let i = 0; i < signsString.length; i++)
    {
      let sign = signsString[i];
      signs.push(<button className="sign btn btn-danger" onClick={() => onPress(sign)} value={sign} key={`${sign}`}>{sign}</button>);
    }

    return (
      <div className="signs">
        {signs}
      </div>
    );
  }
}
