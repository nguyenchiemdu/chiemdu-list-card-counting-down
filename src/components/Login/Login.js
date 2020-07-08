import React from "react";
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isAllowSubmit: false,
    };
    this.usernameRef = React.createRef();
    this.buttonSubmitRef = React.createRef();
  }
  componentDidMount() {
    // fetch("http://").then((res) => {
    //   if (res.allow == true) {
    //     this.setState({ isAllowSubmit: true });
    //   }
    // });
  }
  changeInput = (e) => {};
  submit = (e) => {
    e.preventDefault();
    console.log(this.usernameRef.current.value);
  };
  click = (e) => {
    e.preventDefault();
    // if (isAllowSubmit) {
    //   this.submit();
    // }
  };
  render() {
    return (
      <div></div>
      // // <form>
      // //   <input ref={this.usernameRef} placeholder="username" name="username" />
      // //   <button onClick={this.click}>Click</button>
      // // </form>

      // // // ul,li
      // <html>
      // <div>
      //   <ul>
      //     <li></li>
      //     <li></li>
      //     <li></li>
      //   </ul>
      //   <div>
      //   <ul>
      //     <li></li>
      //     <li></li>
      //     <li>
      //       <li>
      //         <ul>
      //           <li></li>
      //           <li>
      //             <ul></ul>
      //           </li>
      //         </ul>
      //       </li>
      //     </li>
      //   </ul>
      //   </div>
      // </div>
      // </html>
      // //  ( { () } ( {} ) {} {
      // // regex
      // // regular expression
      // ("<li>|</li><ul></ul>")
      // <ul>
      //     <li></li>
      //     <li></li>
      //     <li></li>
      //   </ul>
      // <ul>
      //     <li></li>
      //     <li></li>
      //     <li>
      //       <li>
      //         <ul>
      //           <li></li>
      //           <div>
      //           <li>
      //             <ul></ul>
      //           </li>
      //           </div>
      //         </ul>
      //       </li>
      //     </li>
      //   </ul>
      // // level max 6
      // // <div className="cha">
      // //   <div className="con1"></div>
      // //   <div className="con2"></div>
      // // </div>
    );
  }
}

export default Login;
