import React, { Component } from 'react'
import {Card,Col,Row} from 'antd';
export default class infoCard extends Component {
    render() {
        return (
            <div style={{marginRight:'20px'}} className="site-card-wrapper">
            <Row style={{display: "flex",flexDirection:"row", justifyContent:"space-between"}}>
              <Col span={5}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
              <Col span={5}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
              <Col span={5}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
              <Col span={5}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
            </Row>
          </div>
        )
    }
}
