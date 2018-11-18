// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!


});


$.ajax({
  url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson',
  method: 'GET',
  success: function(response) {
    $('#info').empty();
            response.features.forEach(earthquake => {
                let elem = `${earthquake.properties.title}`
                $('#info').append(elem)
            });
  },
  
  
error: function(error) { 
  console.log(error);
}


})




var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        })};
        