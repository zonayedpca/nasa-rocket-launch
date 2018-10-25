import React, { Component } from 'react';
import axios from 'axios';
import { BarLoader } from 'react-spinners';

import Item from './Item';
import dateFormat from '../utils/dateFormat';

class ArchieveLaunch extends Component {
  state = {
    data: ''
  }

  async getData() {
    const today = dateFormat(Date.now());
    const { data } = await axios(`https://launchlibrary.net/1.4/launch?offset=0&limit=5&sort=desc&enddate=${today}`);
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
          <Item key={oneData.id} data={oneData} />
        ))}
      </div>
    )
  }
}

export default ArchieveLaunch;
