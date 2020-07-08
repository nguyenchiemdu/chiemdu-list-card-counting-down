import React from "react";
import ListAnimal from "./Animal/ListAnimal";
import BaseLayout from "./Layout/BaseLayout";
import IncreaseNumber from "./components/IncreaseNumber";
import Login from "./components/Login/Login";
import TableUser from "./components/TableUser/TableUser";
import ListCard from "./components/ListCard/ListCard";
import "./App.css";

class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAbc: true,
      a: 15,
      email: this.props.defaultEmail,
      prevPropsUserID: this.props.userID,
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <div className="container">
          <ListCard />
        </div>
        {/* <button
          onClick={() => {
            console.log("click");
            this.setState({ a: 10, isAbc: false });
          }}
        >
          click
        </button>
        {this.state.a}
        <BaseLayout>
          <TableUser />
        </BaseLayout>
        {this.state.isAbc === true ? <Abc /> : null} */}
      </div>
    );
  }
}

class Abc extends React.Component {
  componentWillUnmount() {
    console.log("componentWillUnmount abc");
  }
  render() {
    return <div>abc</div>;
  }
}
export default AppClass;
