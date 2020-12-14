import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-map-react';
import React, { Component } from 'react';

export class MapContainer extends Component {
	render() {
	  return (
		<Map google={this.props.google} zoom={14}>

		  <Marker onClick={this.onMarkerClick}
				  name={'Current location'} />

		  <InfoWindow onClose={this.onInfoWindowClose}>
			  <div>
				<h1>{this.state.selectedPlace.name}</h1>
			  </div>
		  </InfoWindow>
		</Map>
	  );
	}
  }

  export default GoogleApiWrapper({
	apiKey: ("AIzaSyAqU5DvPyolKD9PLRQyAoQ4J3vBOnyibh8")
  })(MapContainer)