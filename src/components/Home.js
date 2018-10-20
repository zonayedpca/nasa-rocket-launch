import React from 'react';

import Brand from './Brand';
import Countdown from './Countdown';
import NextLaunch from './NextLaunch';
import ArchieveLaunch from './ArchieveLaunch';

export default () => (
  <div>
    <header className="header-area">
      <div className="container">
        <div className="row">
          <Brand />
          <Countdown />
        </div>
      </div>
    </header>
    <section className="content section-pad">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <NextLaunch />
          </div>
          <div className="col-md-4">
            <ArchieveLaunch />
          </div>
        </div>
      </div>
    </section>
  </div>
)
