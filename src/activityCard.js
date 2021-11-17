import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
export default class activityCard extends Component {
  render() {
    const {eventslist}= this.props.store.getState();
    return (
      <div style={{ margin: "20px", width: "100%" }}>
        <Card className="recentActivity" title="Recent Activities">
        {eventslist.map((item)=>{
          return <Link to = {"www.github.com/"+item.repo.name}>
          <Card  type="inner" title={item.repo.name} style = {{marginTop:"5px"}}>
          Created at: {item.created_at.slice(0,10)} ,  Type : {item.type} , id : {item.repo.id}
        </Card>
          </Link>
        })}
        </Card>
      </div>
    );  
  }
}
