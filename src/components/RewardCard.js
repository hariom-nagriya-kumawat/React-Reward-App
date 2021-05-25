import React from "react";
import Reward from "react-rewards";
import RewardImg from "../images/check.jpg";

class RewardCard extends React.Component {
  state = {
    rewardPunish: "",
    count: 0,
  };
  handleCollect = () => {
    const { count } = this.state;
    if (this.props.reward !== undefined && count === 0) {
      this.rewardAnimation();
    }
    this.setState({ count: count + 1 });
    this.props.handleCollect();
  };
  rewardAnimation = () => {
    setTimeout(() => {
      this.reward.rewardMe();
    }, 150);
  };
  render() {
    return (
      <div className="card2">
        {/* code goes here */}
        <h2>Get Your Reward</h2>
        <div style={{ width: "100%", textAlign: "-webkit-center" }}>
          <Reward
            ref={(ref) => {
              this.reward = ref;
            }}
            type={"confetti"}
            config={{
              angle: 90,
              decay: 0.91,
              spread: 45,
              startVelocity: 35,
              elementCount: 190,
              elementSize: 10,
              lifetime: 200,
              zIndex: 5,
              springAnimation: true,
            }}
          >
            <div
              className="RewardCard"
              id={this.props.reward !== undefined ? "_blank" : "reward"}
              onClick={() =>
                this.props.reward === undefined
                  ? this.props.handleRandomNumber()
                  : ""
              }
            >
              {/* <span > */}
              {this.props.showRight ? (
                <img src={RewardImg} alt="check-log" className="rightClick" />
              ) : null}
              <p
                className="click"
                style={{ top: this.props.showRight ? "-3%" : "40%" }}
              >
                {this.props.reward !== undefined
                  ? this.props.reward
                  : "Click here"}
              </p>
              {/* </span> */}
              {/* {this.props.showRight ? (
                <img src={RewardImg} alt="check-log" className="rightClick" />
              ) : null}
              <p>
                {this.props.reward !== undefined
                  ? this.props.reward
                  : "Click here"}
              </p> */}
            </div>
          </Reward>
        </div>
        <section>
          <button onClick={() => this.handleCollect()}>Collect</button>
          <button onClick={() => this.props.handleRewardPoints()}>Retry</button>
        </section>
        <h2>
          {this.props.attempt >= 3
            ? "No more attempt left"
            : "Left attempt " + (3 - this.props.attempt)}
        </h2>
      </div>
    );
  }
}

export default RewardCard;
