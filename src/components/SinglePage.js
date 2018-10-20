import React from 'react';

import Brand from './Brand';
import NextLaunch from './NextLaunch';
import HeaderSingle from './HeaderSingle';

export default () => (
  <div>
    <header className="header-area">
      <div className="container">
        <div className="row">
          <Brand />
          <HeaderSingle />
        </div>
      </div>
    </header>
    <section className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <NextLaunch />
          </div>
          <div className="col-md-4">
            Archieve
          </div>
        </div>
      </div>
    </section>
  </div>
)
