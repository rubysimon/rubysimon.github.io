function initMap() {
  var myLatLng = {lat: 40.619596, lng: -73.959029};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
 marker.setMap(map);
}