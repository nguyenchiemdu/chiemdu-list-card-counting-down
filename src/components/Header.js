import React from "react";
import ListMenu from "../components/Menu/ListMenu";

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
      <div style={{margin:'50px 0'}}>
        HEADER
        <ListMenu/>
        <button onClick={this.toggle(3)}>Toggle</button>
        {this.state.isToggle === true ? <div>Toggle ok!</div> : null}
      </div>
    );
  }
}

export default Header;
