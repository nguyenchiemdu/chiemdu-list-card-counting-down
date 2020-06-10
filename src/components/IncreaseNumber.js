import React from "react";

class IncreaseNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 10,
    };
  }
  
  render() {
    {
      //   console.log("this.state.number", this.state.number);
      console.log("render");
    }
    return (
      <div style={{ backgroundColor: "red", margin: "50px" }}>
        <button
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          Add
        </button>
        <div>{this.state.number}</div>
      </div>
    );
  }
}
export default IncreaseNumber;
