import react from "react";
import UserCard from "./userCard";
import InfoCard from "./infoCard";
import ActivityCard from './activityCard';
export default class Profile extends react.Component {
  componentDidMount()
  {
    this.props.store.subscribe(()=>{
      this.forceUpdate();
    });

  }
  render() {
    const {store} = this.props;
    return (
      <div className="profile">
      <div className="top-cards">
        <UserCard className="userCard" store = {store}/>
        <ActivityCard className="activityCard" store = {store}/>
      </div>
      <InfoCard store = {store}/>
      </div>
    );
  }
}
