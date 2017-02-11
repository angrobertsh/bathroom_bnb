export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = [];
    this._createMarkerFromBathroom = this._createMarkerFromBathroom.bind(this);
    this._bathroomsToAdd = this._bathroomsToAdd.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
  }

  updateMarkers(bathrooms){
    this.bathrooms = Object.keys(bathrooms).map((key) => bathrooms[key]);
    this._bathroomsToAdd().forEach(this._createMarkerFromBathroom);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _markersToRemove(){

  }

  _removeMarker(marker){

  }

  _createMarkerFromBathroom(bathroom){
    const pos = new google.maps.LatLng(bathroom.lat, bathroom.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      bathroomId: bathroom.id
    });
    marker.addEventListener('click', () => this.handleClick(bathroom));
    this.markers.push(marker);
  }

  _bathroomsToAdd(){
    const currentBathrooms = this.markers.map( marker => marker.bathroomId);
    return this.bathrooms.filter( bathroom => !currentBathrooms.includes(bathroom.id));
  }



}
