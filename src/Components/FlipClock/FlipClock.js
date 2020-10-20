import React from "react";
import FlipUnitContainer from "./FlipUnitContainer/FlipUnitContainer";

class FlipClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 0,
      dayShuffle: true,
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true
    };
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    var currentDate = new Date(),
      timep = new Date("2020/03/14 00:00:00"),
      diff = Math.round((timep - currentDate) / 1000),
      day = Math.floor(diff / (24 * 60 * 60)),
      surplus = diff - day * (24 * 60 * 60),
      hours = Math.floor(surplus / (60 * 60)),
      surplus = surplus - hours * (60 * 60),
      minutes = Math.floor(surplus / 60),
      seconds = surplus - minutes * 60;

    if (day !== this.state.day) {
      const dayShuffle = !this.state.dayShuffle;
      this.setState({
        day,
        dayShuffle
      });
    }

    if (hours !== this.state.hours) {
      const hoursShuffle = !this.state.hoursShuffle;
      this.setState({
        hours,
        hoursShuffle
      });
    }

    // on minute chanage, update minutes and shuffle state
    if (minutes !== this.state.minutes) {
      const minutesShuffle = !this.state.minutesShuffle;
      this.setState({
        minutes,
        minutesShuffle
      });
    }

    // on second chanage, update seconds and shuffle state
    if (seconds !== this.state.seconds) {
      const secondsShuffle = !this.state.secondsShuffle;
      this.setState({
        seconds,
        secondsShuffle
      });
    }
  }

  render() {
    const {
      day,
      hours,
      minutes,
      seconds,
      dayShuffle,
      hoursShuffle,
      minutesShuffle,
      secondsShuffle
    } = this.state;
    return (
      <div className={"flipClock"}>
        <div style={{ marginRight: this.props.xs ? '1rem' : '3rem' }}>
          <FlipUnitContainer unit={"day"} digit={day} shuffle={dayShuffle} />
        </div>
        <div style={{ marginRight:  this.props.xs ? '1rem' : '3rem' }}>
          <FlipUnitContainer unit={"hours"} digit={hours} shuffle={hoursShuffle}/>
        </div>
        <div style={{ marginRight:  this.props.xs ? '1rem' : '3rem' }}>
          <FlipUnitContainer unit={"minutes"} digit={minutes} shuffle={minutesShuffle} />
        </div>
        <div>
          <FlipUnitContainer unit={"seconds"} digit={seconds} shuffle={secondsShuffle} />
        </div>
      </div>
    );
  }
}

export default FlipClock;
