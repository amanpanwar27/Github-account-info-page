import React, { Component } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;
export default class userCard extends Component {
  render() {
    const { store } = this.props;
    const data = store.getState();
    console.log("data : ", data);
    return (
      <div
        style={{
          paddingLeft: "20px",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Card
          hoverable
          style={{ width: 240, height: 330 }}
          cover={
            <img className="userImage" alt="user-image" src={data.avatar} />
          }
        >
         <div style = {{marginTop:"-10px"}}>
         <Link>
         <h3 style={{marginBottom:"-10px"}}>Username:</h3>
         {data.username}
       </Link>
       <Link>
         <h3 style={{marginBottom:"-10px"}}>Name:</h3>
         {data.name}
       </Link>
       <h3 style={{marginBottom:"-10px"}}>Created at:</h3>
       {data.created_at.slice(0,10)}</div>
        </Card>
      </div>
    );
  }
}
