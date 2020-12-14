import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';
import marker from '../assets/icons8-marker-96.png';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 18.785933,
      lng: 98.967194
    },
    zoom: 1000
  };


  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '47vh', width: '97%' }}>

        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAqU5DvPyolKD9PLRQyAoQ4J3vBOnyibh8" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <AnyReactComponent
            lat={18.785933}
            lng={98.967194}
            icon={marker}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
