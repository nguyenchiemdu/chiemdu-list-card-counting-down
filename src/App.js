import React from "react";
import ListAnimal from "./Animal/ListAnimal";
import BaseLayout from "./Layout/BaseLayout";
import IncreaseNumber from "./components/IncreaseNumber";
import Login from "./components/Login/Login";
import "./App.css";

class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 15,
    };
  }
  render() {
    return (
      <div className="App">
        {/* <BaseLayout> */}
          <Login />
        {/* </BaseLayout> */}
      </div>
    );
  }
}
function AppFunction() {
  const a = 5;
  return (
    <div className="App">
      <BaseLayout>
        <div>{a}</div>
      </BaseLayout>
    </div>
  );
}
export default AppClass;
