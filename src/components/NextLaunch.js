import React, { Component } from 'react';
import axios from 'axios';

import Item from './Item';

class NextLaunch extends Component {
  state = {
    data: ''
  }

  async getData() {
    const { data } = await axios('https://launchlibrary.net/1.4/launch/next/10');
    this.setState({data});
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { data } = this.state;

    if(!data) {
      return <p>Loading...</p>
    }

    return (
      <div className="next-launch">
        {data.launches.map(oneData => (
          <Item />
        ))}
      </div>
    )
  }
}

export default NextLaunch;
