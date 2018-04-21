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

