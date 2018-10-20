import React, { Component } from 'react';
import axios from 'axios';

import { getDay, getHour, getMinute, getSecond } from '../utils/timePart';

class Countdown extends Component {
  state = {
    data: '',
    difference: ''
  }

  async getData() {
    const { data } = await axios('https://launchlibrary.net/1.4/launch/next/1');
    this.setState({ data: data.launches[0] });
  }

  getInterval() {
    setInterval(() => {
      if(this.state.data) {
        const difference = this.getExactTime(new Date().getTime());
        this.setState({difference});
      }
    }, 1000)
  }

  getExactTime(dateNow) {
    console.log();
    const countDownTime = (Date.parse(this.state.data.windowstart));
    let difference = countDownTime - dateNow;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    difference -= 1000;
    const newDifference = {days, hours, minutes, seconds};
    return newDifference;
  }

  componentDidMount() {
    this.getData();
    this.getInterval();
  }

  render() {
    const { data, difference } = this.state;

    if(!data || !difference) {
      return (
        <p>Loading...</p>
      )
    }

    return (
      <div className="countdown">
        <h4>Next Launch: <strong>{data.rocket.name}</strong></h4>
        <ul className="list-inline time">
          <li className="day">
            <span>{difference.days}</span>
            <strong>Day</strong>
          </li>
          <li className="hour">
            <span>{difference.hours}</span>
            <strong>Hour</strong>
          </li>
          <li className="min">
            <span>{difference.minutes}</span>
            <strong>Minute</strong>
          </li>
          <li className="second">
            <span>{difference.seconds}</span>
            <strong>Second</strong>
          </li>
        </ul>
        <a className="btn btn-more"></a>
        <p><em>All times are displayed in UTC</em></p>
      </div>
    )
  }
}

export default Countdown;
