const API_KEY = 'AIzaSyCuVdfqTn6ahF6u-sPWYVL8Mvis6PGwa7g';
const url = 'https://www.googleapis.com/geolocation/v1/geolocate?key=';
var map, infoWindow;
var navlink1 = document.getElementById("nav-link1");
var navlink2 = document.getElementById("nav-link2");
var navlink3 = document.getElementById("nav-link3");
var News = document.getElementById("News");
var crowdsourcing = document.getElementById("crowdsourcing");
var fadein = document.getElementById("fadein");
var Analytics = document.getElementById("Analytics");

navlink1.addEventListener("click", ()=>{
  document.getElementById("fadein").style.display = "none";
  News.style.display="block";
  crowdsourcing.style.display="none";
  Analytics.style.display="none";
});

navlink2.addEventListener("click", ()=>{
  document.getElementById("fadein").style.display = "none";
  News.style.display="none";
  crowdsourcing.style.display="block";
  Analytics.style.display="none";
});

navlink3.addEventListener("click", ()=>{
  document.getElementById("fadein").style.display = "none";
  News.style.display="none";
  crowdsourcing.style.display="none";
  Analytics.style.display="block";
});

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 60.169856, lng: 24.938379},
    zoom: 6
  });
  var script = document.createElement('script');
        // This example uses a local copy of the GeoJSON stored at
        // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
        script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
        document.getElementsByTagName('head')[0].appendChild(script);
      }

      // Loop through the results array and place a marker for each
      // set of coordinates.
      window.eqfeed_callback = function(results) {
        for (var i = 0; i < results.features.length; i++) {
          var coords = results.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[1],coords[0]);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
          });}
  infoWindow = new google.maps.InfoWindow;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

