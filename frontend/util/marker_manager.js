export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = [];
    this._createMarkerFromBathroom = this._createMarkerFromBathroom.bind(this);
    this._bathroomsToAdd = this._bathroomsToAdd.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(bathrooms){
    this.bathrooms = bathrooms;
    this._bathroomsToAdd().forEach(this._createMarkerFromBathroom);
  }

  _markersToRemove(){

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
