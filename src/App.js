import React from "react";
import ProfileCard from "./components/ProfileCard";
import RewardCard from "./components/RewardCard";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    data: { name: "Herry", points: 300, attempt: 0 },
    show: false,
    reward: undefined,
    collected: false,
  };
  handleRandomNumber = () => {
    let reward = Math.floor(Math.random() * 100) + 1;
    this.setState({ reward });
  };

  handleRewardPoints = () => {
    const { data, collected, reward } = this.state;
    if (collected) {
      return alert("You already collected the reward.");
    } else if (reward === undefined) {
      return alert("First you get the reward then click on retry button.");
    } else if (data.attempt > 3) {
      return alert("No more attempt left.");
    } else {
      this.setState({ data: { ...data, attempt: data.attempt + 1 } });
      this.handleRandomNumber();
    }
  };

  handleCollect = () => {
    const { data, reward, collected } = this.state;
    if (reward === undefined) {
      return alert("First you get the reward then click on collect button.");
    } else if (collected) {
      return alert("You already collected the reward.");
    }
    this.setState({
      data: { ...data, points: data.points + reward },
      collected: true,
      show: true,
    });
  };

  render() {
    const { data, show } = this.state;
    return (
      <div className="app">
        {/* code here to render child components */}
        <ProfileCard data={data} />
        <RewardCard
          attempt={data.attempt}
          reward={this.state.reward}
          showRight={show}
          handleRandomNumber={this.handleRandomNumber}
          handleCollect={this.handleCollect}
          handleRewardPoints={this.handleRewardPoints}
        />
      </div>
    );
  }
}

export default App;
