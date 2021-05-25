import React from "react";
import userimg from "../images/user-image.jpg";

class ProfileCard extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="ProfileCard">
        {/* code goes here */}
        <img
          src={userimg}
          alt="user-image"
          style={{ width: "30%", height: "30%", borderRadius: "30%" }}
        />
        <h2>{"Hey " + data.name + "!"}</h2>
        <h2>Reward Points</h2>
        <h2>{data.points}</h2>
      </div>
    );
  }
}

export default ProfileCard;
