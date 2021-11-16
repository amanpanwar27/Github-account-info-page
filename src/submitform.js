import React from "react";
import { sendusername, handleapi } from "./actions/index";
import { Form, Input, Button, Checkbox } from "antd";

class submitform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }
  usernamehandler = (e) => {
    this.setState({
      username: e.target.value,
    });
    console.log(this.state.username);
    // this.props.store.subscribe(() => {
    //   console.log("subscribed sucessfully");
    // });
    // this.forceUpdate();
  };
  clickhandler = () => {
    console.log(this.props);

    this.props.store.dispatch(sendusername(this.state.username));
    const username = this.props.store.getState().username;
    this.props.store.subscribe(() => {
      console.log("hey there");
    });
    console.log(username);
    handleapi(username);
  };
  render() {
    return (
      <div className="submit-form">
        <div className="searchBar">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            className="logo"
          />
          <input
            className="searchBar"
            type="text"
            placeholder="Enter Your Github Username .."
            onChange={(e) => {
              this.usernamehandler(e);
            }}
          />
          <button
            type="button"
            class="submitButton"
            onClick={this.clickhandler}
          >
            SUBMIT
          </button>
        </div>
      </div>
    );
  }
}

export default submitform;
