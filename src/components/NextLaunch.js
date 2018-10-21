import React, { Component } from 'react';
import axios from 'axios';
import { BarLoader } from 'react-spinners';

import Item from './Item';

class NextLaunch extends Component {
  state = {
    data: ''
  }

  async getData() {
    const { data } = await axios('https://launchlibrary.net/1.4/launch/next/10?status=1');
    this.setState({data});
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { data } = this.state;

    if(!data) {
      return <div className="load">
        <BarLoader color={'#000'} />
      </div>
    }

    return (
      <div className="next-launch">
        <h3>Next Launches</h3>
        {data.launches.map(oneData => (
          <Item key={oneData.id} data={oneData} />
        ))}
      </div>
    )
  }
}

export default NextLaunch;
