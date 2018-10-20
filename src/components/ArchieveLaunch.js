import React, { Component } from 'react';
import axios from 'axios';
import { BarLoader } from 'react-spinners';

import Item from './Item';

class ArchieveLaunch extends Component {
  state = {
    data: ''
  }

  async getData() {
    const { data } = await axios('https://launchlibrary.net/1.4/launch?offset=0&limit=5&sort=desc&enddate=2018-10-18');
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
      <div className="arc-launch">
        <h3>Past Launches</h3>
        {data.launches.map(oneData => (
          <Item data={oneData} />
        ))}
      </div>
    )
  }
}

export default ArchieveLaunch;
