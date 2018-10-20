import React, { Component } from 'react';
import axios from 'axios';

export default ({data}) => (
  <div className="intro">
    <h2>{data.name}</h2>
  </div>
)
