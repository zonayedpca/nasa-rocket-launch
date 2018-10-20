import React from 'react';
import { Link } from 'react-router-dom';

import GoogleMap from './GoogleMap';

const Info = ({data: {rocket, location, lsp}}) => (
  <div className="info">
    <ul className="list-inline">
      <li><img src={rocket.imageURL} alt="rocket-pic" /></li>
      <li><h4>Name: {rocket.name}</h4></li>
      <li><p>({rocket.configuration})</p></li>
    </ul>
    <ul className="location">
      <h5>Location</h5>
      {location.pads.length > 0 && location.pads.map(onePad => (
        <React.Fragment>
          <li>Name: {onePad.name}</li>
          <li>Latitude: {onePad.latitude}</li>
          <li>Longitude: {onePad.longitude}</li>
          <li><a href={`${onePad.wikiURL}`}>Read More</a></li>
        </React.Fragment>
      ))}
    </ul>
    <ul>
      <h5>Launch Service Provider</h5>
      <li>{lsp.name} ({lsp.abbrev})</li>
      <li>Country: {lsp.countryCode}</li>
      <li>
        <ul className="list-inline">
          <p>More Info</p>
          {lsp.infoURLs.map((infoURL, index) => (
            <li><a href={`${infoURL}`}>{`Info ${index + 1}`}</a></li>
          ))}
        </ul>
      </li>
      <li><a href={`${lsp.wikiURL}`}>Read More</a></li>
    </ul>
    <ul>
      {rocket.agencies.length > 0 && rocket.agencies.map((oneAgency, index) => (
        <React.Fragment>
          <h5>{`Agency ${index + 1}`}</h5>
          <li>Name: {oneAgency.name}</li>
          <li>Country: {oneAgency.countryCode}</li>
          <li><a href={`${oneAgency.wikiURL}`}>Read More</a></li>
        </React.Fragment>
      ))}
    </ul>
  </div>
)

export default Info;
