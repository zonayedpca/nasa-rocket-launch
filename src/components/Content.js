import React from 'react';

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
        <li key={index}><a href={`${oneVid}`}>{`Link ${index + 1}`}</a></li>
      ))}
    </ul>
    <ul>
      <h5>Missions</h5>
      {missions.map(mission => (
        <React.Fragment key={mission.id}>
          <li><strong>Name:</strong> {mission.name}</li>
          <li><strong>Description:</strong>{mission.description}</li>
          <ul>
            {mission.agencies && mission.agencies.map(agency => (
              <React.Fragment key={agency.id}>
                <li>{agency.name} ({agency.abbrev})</li>
                <li>Country: {agency.countryCode}</li>
                <ul className="m10 list-inline">
                  <h5>More Info</h5>
                  {agency.infoURLs.map((infoURL, index) => (
                    <li key={index}><a href={`${infoURL}`}>{`Info ${index + 1}`}</a></li>
                  ))}
                </ul>
              </React.Fragment>
            ))}
          </ul>
          <li>
            <ul>
              <h5>Payloads</h5>
              {mission.payloads.map((payload, index) => (
                <li key={index}>{payload.name}</li>
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
