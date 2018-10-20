import React from 'react';
import { Link } from 'react-router-dom';

import statusFunc from '../utils/status';

const Item = ({data: { id, name, windowstart, status }}) => (
  <Link className="item" to={`/launch/${id}`}>
    <div>
      <h4>{name}</h4>
      <p>On: {windowstart}</p>
      <p>Status: {statusFunc(status)}</p>
    </div>
  </Link>
)

export default Item;
