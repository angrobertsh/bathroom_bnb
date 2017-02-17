import React from 'react';
import { Link, withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

class BathroomMap extends React.Component{
  constructor(props){
    super(props);
    this._registerListeners = this._registerListeners.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this.requestAllBathrooms = this.props.requestAllBathrooms.bind(this);
    this.updateBounds = this.props.updateBounds.bind(this);
  }

  componentDidMount(){
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this._registerListeners();
    this.MarkerManager.updateMarkers(this.props.bathrooms);
  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers(this.props.bathrooms);
  }

  _handleClick(coords){
    this.props.router.push({
      pathname: "benches/new",
      query: coords
    });
  }

  _registerListeners(){
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
      Promise.resolve(this.updateBounds(bounds)).then(this.requestAllBathrooms(this.props.filters));
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      this._handleClick({lat: event.latLng.lat(), lng: event.latLng.lng()})
    });
  }

  render(){
    return (<div id='map-container' ref={ map => this.mapNode = map }></div>
    );
  }
}

export default withRouter(BathroomMap);
