import react from "react";
import UserCard from "./userCard";
import InfoCard from "./infoCard";
import ActivityCard from './activityCard';
export default class Profile extends react.Component {
  render() {
    return (
      <div className="profile">
      <div className="top-cards">
        <UserCard className="userCard" />
        <ActivityCard className="activityCard"/>
      </div>
      <InfoCard/>
      </div>
    );
  }
}
