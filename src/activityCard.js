import React, { Component } from "react";
import { Card } from "antd";
export default class activityCard extends Component {
  render() {
    return (
      <div style={{margin:"20px", width: "100%"}}>
        <Card title="Card title">
          <Card
            type="inner"
            title="Inner Card title"
            extra={<a href="#">More</a>}
          >
            Inner Card content
          </Card>
          <Card
            style={{ marginTop: 16 }}
            type="inner"
            title="Inner Card title"
            extra={<a href="#">More</a>}
          >
            Inner Card content
          </Card>
        </Card>
      </div>
    );
  }
}
