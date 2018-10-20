import React, { Component } from 'react';
import axios from 'axios';
import { BarLoader } from 'react-spinners';

import Brand from './Brand';
import HeaderSingle from './HeaderSingle';
import Content from './Content';
import Info from './Info';

class SinglePage extends Component {
  state = {
    data: ''
  }

  async getData() {
    const { data } = await axios(`https://launchlibrary.net/1.4/launch/${this.props.match.params.id}`);
    this.setState({data: data.launches[0]});
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const { data } = this.state;
    if(!data) {
      return (
        <div className="loader">
          <div className="load">
            <BarLoader color={'#fcf1df'} />
          </div>
        </div>
      )
    }
    return (
      <div>
        <header className="header-area">
          <div className="container">
            <div className="row">
              <Brand />
              <HeaderSingle data={this.state.data} />
            </div>
          </div>
        </header>
        <section className="content section-pad">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <Content data={this.state.data} />
              </div>
              <div className="col-md-4">
                <Info data={this.state.data} />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default SinglePage;
