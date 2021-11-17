import React from "react";
import { sendusername, handleapi } from "./actions/index";
import { Link } from "react-router-dom";
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
  };
  clickhandler = () => {
    const username = this.state.username;
    handleapi(username, this.props.store.dispatch);
    this.props.store.subscribe(() => {
      console.log("subscribed sucessfully");
      console.log(this.props.store.getState());
      this.forceUpdate();
    });
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
          <Link to = '/profile'>
            <button
              type="button"
              className="submitButton"
              onClick={this.clickhandler}
            >
              SUBMIT
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default submitform;
