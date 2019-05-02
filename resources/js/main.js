$(document).ready(function(){
  var map;
  var options;
  options ={
    center: {lat: 33.7701, lng: -118.1937},
    zoom: 8
  }

  //crate MAP
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'),options);
  }

  //add Marker
  addMarker(33.8045,-118.1678);

  //////////////////////////////////////////////////////////////////////////////
  function addMarker(lat,lng){
    var marker = new google.maps.Marker({
      position:{lat: lat, lng: lng},
      map:map
    });
  }

});//end of document
