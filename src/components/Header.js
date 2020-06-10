import React from "react";

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state={
        isToggle: false
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle(id) {
      var self = this;
      return function(){
        console.log(id);
        self.setState({ isToggle: !self.state.isToggle });
      }
  }
  render() {
    return (
      <div>
        HEADER
        <button onClick={this.toggle(3)}>Toggle</button>
        {this.state.isToggle === true ? <div>Toggle ok!</div> : null}
      </div>
    );
  }
}

export default Header;
