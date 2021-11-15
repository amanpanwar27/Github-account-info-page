import React from "react";
import { sendusername, handleapi } from "./actions/index";
class submitform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }
  usernamehandler = (e)=> {
    this.setState({
      username: e.target.value,
    });
    console.log(this.state.username);
    // this.props.store.subscribe(() => {
    //   console.log("subscribed sucessfully");
    // });
    // this.forceUpdate();
  }
  clickhandler=()=> {
    console.log(this.props);
    
    this.props.store.dispatch(sendusername(this.state.username));
    const username = this.props.store.getState().username;
    this.props.store.subscribe(() => {
      console.log("hey there");
    });
    console.log(username);
    handleapi(username);
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="enter your username"
            onChange={(e) => this.usernamehandler(e)}
          ></input>
          <button type='button' onClick={this.clickhandler}></button>
        </form>
      </div>
    );
  }
}

export default submitform;
