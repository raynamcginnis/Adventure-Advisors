// $("#searchBtn").click(function (event) {

//   function initilize() {
//     var map = new google.maps.Map(document.getElementById('travelInfo'), {
//       center: {
//         lat: -33.8688,
//         lng: 151.2195
//       },
//       zoom: 13
//     });
//     var marker = new google.maps.Marker({
//       map: map
//     });
//     marker.addListener('click', function () {
//       infowindow.open(map, marker);
//     });

//     autocomplete.addListener('place_changed', function () {
//       infowindow.close();
//       var place = autocomplete.getPlace();
//       if (!place.geometry) {
//         return;
//       }

//       if (place.geometry.viewport) {
//         map.fitBounds(place.geometry.viewport);
//       } else {
//         map.setCenter(place.geometry.location);
//         map.setZoom(17);
//       }

//       // Set the position of the marker using the place ID and location.
//       marker.setPlace({
//         placeId: place.place_id,
//         location: place.geometry.location
//       });
//       marker.setVisible(true);

//       infowindowContent.children['place-name'].textContent = place.name;
//       infowindowContent.children['place-id'].textContent = place.place_id;
//       infowindowContent.children['place-address'].textContent =
//         place.formatted_address;
//       infowindow.open(map, marker);
//     });
//   }

//   //   Show local places/stuff
//   var request = {
//     placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
//     fields: ['name', 'rating', 'formatted_phone_number', 'geometry']
//   };

//   var service = new google.maps.places.PlacesService(map);
//   service.getDetails(request, callback);

//   function callback(place, status) {
//     if (status == google.maps.places.PlacesServiceStatus.OK) {
//       createMarker(place);
//     }
//   }
//   initilize();
// });

$("#searchBtn").click(function (event) {
  var geocoder;
  var map;
  var address = "San Diego, CA";
  
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions = {
      zoom: 8,
      center: latlng,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      },
      navigationControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    if (geocoder) {
      geocoder.geocode({
        'address': address
      }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
            map.setCenter(results[0].geometry.location);
  
            var infowindow = new google.maps.InfoWindow({
              content: '<b>' + address + '</b>',
              size: new google.maps.Size(150, 50)
            });
  
            var marker = new google.maps.Marker({
              position: results[0].geometry.location,
              map: map,
              title: address
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.open(map, marker);
            });
  
          } else {
            alert("No results found");
          }
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
    }
  }
  initialize()
})