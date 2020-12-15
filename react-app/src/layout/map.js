import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';
import Marker from '../assets/icons8-marker-96.png';

const AnyReactComponent = ({ Marker }) => <div><img src={Marker} style={{ width: '24px'}} /></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 18.787517,
      lng: 98.974227
    },

    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '47vh', width: '97%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAqU5DvPyolKD9PLRQyAoQ4J3vBOnyibh8" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={18.785933}
            lng={98.967194}
            Marker={Marker}
          />

          <AnyReactComponent
            lat={18.79038685231353}
            lng={98.9824051139253}
            Marker={Marker}
          />

        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
