import React, { Component } from 'react'
import {Card,Col,Row} from 'antd';
export default class infoCard extends Component {
    render() {
      const data = this.props.store.getState();
      const occ  = data.company?data.company:"None (Student)";  
        return (
            <div style={{marginRight:'20px'}} className="site-card-wrapper">
            <Row style={{display: "flex",flexDirection:"row", justifyContent:"space-between"}}>
              <Col span={5}>
                <Card title="Total Repositories:" bordered={false}>
                  {data.repos}
                </Card>
              </Col>
              <Col span={5}>
                <Card title="Followings:" bordered={false}>
                  {data.following}
                </Card>
              </Col>
              <Col span={5}>
                <Card title="Followers:" bordered={false}>
                  {data.followers}
                </Card>
              </Col>
              <Col span={5}>
                <Card title="Company" bordered={false}>
                  {occ}
                </Card>
              </Col>
            </Row>
          </div>
        )
    }
}
