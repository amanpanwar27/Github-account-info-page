import React from "react";
import { sendusername, handleapi } from "./actions/index";
import { Form, Input, Button, Checkbox } from "antd";

class submitform extends React.Component{
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
      <div>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              onChange={(e) => {
                this.usernamehandler(e);
              }}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              onClick={this.clickhandler}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default submitform;
