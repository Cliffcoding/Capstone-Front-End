import React, { Component } from 'react';
import Weather from './Weather'


class KioskView extends Component {
  constructor(props) {
    super(props)
    this.handleDay = this.handleDay.bind(this);
    this.state={date: new Date()}
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnMount(){
    clearInterval(this.timerID);
  }

  handleDay(){
    let timeOfDay = this.state.date.toLocaleTimeString().split(' ')

    return timeOfDay[1];
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div className="KioskView">
      <h1>{this.handleDay() === "AM" ? "GOOD MORNING!" : "GOOD EVENING"}</h1>
        <h3>{this.state.date.toLocaleTimeString()}</h3>
        <Weather />
      </div>
    );
  }
}

export default KioskView;
