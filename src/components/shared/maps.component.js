import React, { Component } from 'react';
import config from '../../config/config';
import Media from "react-media";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: -7.545755, lng: 110.873799 }}
  >
    <Marker
      position={{ lat: -7.545755, lng: 110.873799 }}
    />
  </GoogleMap>
));

export default class Maps extends Component {

  generateContent(isMobile = false) {
    return (
      <div className={"maps-wrapper container " + ((isMobile) ? 'is-mobile' : null)}>
        <MapWithAMarker
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.googleMaps.apiKey}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `300px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }

  render() {
    return (
      <Media query="(max-width: 420px)">
        {matches =>
          matches ? (
            this.generateContent(true)
          ) : (
            this.generateContent()
          )
        }
      </Media>
    );
  }
}
