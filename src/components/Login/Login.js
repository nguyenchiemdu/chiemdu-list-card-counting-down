import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }
  changeInput = (e) => {
    console.log([e.target.name]);
    this.setState({ [e.target.name]: e.target.value });
  };
  submit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <form>
        <input
          onChange={this.changeInput}
          placeholder="username"
          name="username"
        />
        <input onChange={this.changeInput} placeholder="email" name="email" />
        <input
          onChange={this.changeInput}
          placeholder="password"
          name="password"
        />
        <input
          onChange={this.changeInput}
          placeholder="city"
          name="city"
        />
        <button onClick={this.submit}>submit</button>
      </form>
    );
  }
}

export default Login;
