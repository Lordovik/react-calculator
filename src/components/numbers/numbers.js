import React from 'react';
import "./numbers.css";

export default class Numbers extends React.Component {
  render(){
    let nums = [];

    const onPress = this.props.onPress;

    for(let i = 1; i <= 9; i++)
    {
      nums.push(<button className="number btn btn-primary" onClick={() => onPress(i)} value={i} key={`${i}`}>{i}</button>);
    }
    nums.push(<button className="sign btn btn-danger" onClick={() => onPress("=")} value="=" key="=">=</button>);
    nums.push(<button className="number btn btn-primary" onClick={() => onPress(0)} value="0" key="0">0</button>);
    nums.push(<button className="sign btn btn-danger" onClick={() => onPress("c")} value="c" key="c">c</button>);

    return (
      <div className="numbers">
        {nums}
      </div>
    );
  }
}
