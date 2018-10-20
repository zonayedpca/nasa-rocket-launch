import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BarLoader } from 'react-spinners';

class Countdown extends Component {
  state = {
    data: '',
    difference: ''
  }

  async getData() {
    const { data } = await axios('https://launchlibrary.net/1.4/launch/next/1?status=1');
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
        <div className="load">
          <BarLoader color={'#182624'} />
        </div>
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
        <Link to={`/launch/${data.id}`} className="btn btn-more">More Details</Link>
        <p><em>All times are displayed in UTC</em></p>
      </div>
    )
  }
}

export default Countdown;
