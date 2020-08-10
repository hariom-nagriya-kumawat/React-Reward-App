import React from "react";
import ProfileCard from "./components/ProfileCard";
import RewardCard from "./components/RewardCard";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    data = { name:"Herry",points:300,attemt:0},
    show:false,
    reward:undefined,
    collected:false
  }
  handleRandomNumber = () => {

  };

  handleRewardPoints = () => {

  };

  handleCollect = () => {

  };

  render() {
    return (
      <div className="app">
      
      </div>
    );
  }
}

export default App;
