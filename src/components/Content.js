import React from 'react';
import { Link } from 'react-router-dom';

import statusFunc from '../utils/status';

const Content = ({data: { name, windowstart, status, changed, vidURLs, missions, hashtag }}) => (
  <div className="single">
    <h3>{name}</h3>
    <ul className="list-inline">
      <li className="status">{statusFunc(status)}</li>
      <li className="start-date">{windowstart}</li>
      <li className="l-change">Changed: {changed}</li>
    </ul>
    <ul className="video-urls list-inline">
      <li><strong>Video Links:</strong></li>
      {vidURLs.map((oneVid, index) => (
        <li><a href={`${oneVid}`}>{`Link ${index + 1}`}</a></li>
      ))}
    </ul>
    <ul>
      <h5>Missions</h5>
      {missions.map(mission => (
        <React.Fragment key={mission.id}>
          <li>{mission.name}</li>
          <li>{mission.description}</li>
          <ul>
            {mission.agencies.map(agency => (
              <React.Fragment>
                <li>{agency.name} ({agency.abbrev})</li>
                <li>Country: {agency.countryCode}</li>
                <ul className="list-inline">
                  <p>More Info</p>
                  {agency.infoURLs.map((infoURL, index) => (
                    <li><a href={`${infoURL}`}>{`Info ${index + 1}`}</a></li>
                  ))}
                </ul>
              </React.Fragment>
            ))}
          </ul>
          <li>
            <ul>
              <h5>Payloads</h5>
              {mission.payloads.map((payload, index) => (
                <li>{payload.name}</li>
              ))}
            </ul>
          </li>
        </React.Fragment>
      ))}
    </ul>
    <p>{hashtag}</p>
  </div>
)

export default Content;
