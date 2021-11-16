import React, { Component } from "react";
import { Card } from "antd";
const { Meta } = Card;
export default class userCard extends Component {
  render() {
    return (
      <div style={{paddingLeft:'20px', paddingTop:'20px', paddingBottom:'20px'}}>
        <Card
          hoverable
          style={{ width: 240 , height:330}}
          cover={
            <img
            class="userImage"
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    );
  }
}
