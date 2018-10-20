import React from 'react';
import { GoogleMap, Marker } from 'react-google-maps';

export default () => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
)
