// $("#searchBtn").click(function (event) {
  function initMap() {
    var map = new google.maps.Map(document.getElementById('geomap'), {
      zoom: 13,
      center: {lat: 34.04924594193164, lng: -118.24104309082031}
    });
  
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
  }
  // function initMap() {
  //   // Styles a map in night mode.
  //   var map = new google.maps.Map(document.getElementById('geomap'), {
  //     center: {
  //       lat: 40.674,
  //       lng: -73.945
  //     },
  //     zoom: 12,
  //     styles: [{
  //         elementType: 'geometry',
  //         stylers: [{
  //           color: '#242f3e'
  //         }]
  //       },
  //       {
  //         elementType: 'labels.text.stroke',
  //         stylers: [{
  //           color: '#242f3e'
  //         }]
  //       },
  //       {
  //         elementType: 'labels.text.fill',
  //         stylers: [{
  //           color: '#746855'
  //         }]
  //       },
  //       {
  //         featureType: 'administrative.locality',
  //         elementType: 'labels.text.fill',
  //         stylers: [{
  //           color: '#d59563'
  //         }]
  //       },
  //       {
  //         featureType: 'poi',
  //         elementType: 'labels.text.fill',
  //         stylers: [{
  //           color: '#d59563'
  //         }]
  //       },
  //       {
  //         featureType: 'poi.park',
  //         elementType: 'geometry',
  //         stylers: [{
  //           color: '#263c3f'
  //         }]
  //       },
  //       {
  //         featureType: 'poi.park',
  //         elementType: 'labels.text.fill',
  //         stylers: [{
  //           color: '#6b9a76'
  //         }]
  //       },
  //       {
  //         featureType: 'road',
  //         elementType: 'geometry',
  //         stylers: [{
  //           color: '#38414e'
  //         }]
  //       },
  //       {
  //         featureType: 'road',
  //         elementType: 'geometry.stroke',
  //         stylers: [{
  //           color: '#212a37'
  //         }]
  //       },
  //       {
  //         featureType: 'road',
  //         elementType: 'labels.text.fill',
  //         stylers: [{
  //           color: '#9ca5b3'
  //         }]
  //       },
  //       {
  //         featureType: 'road.highway',
  //         elementType: 'geometry',
  //         stylers: [{
  //           color: '#746855'
  //         }]
  //       },
  //       {
  //         featureType: 'road.highway',
  //         elementType: 'geometry.stroke',
  //         stylers: [{
  //           color: '#1f2835'
  //         }]
  //       },
  //       {
  //         featureType: 'road.highway',
  //         elementType: 'labels.text.fill',
  //         stylers: [{
  //           color: '#f3d19c'
  //         }]
  //       },
  //       {
  //         featureType: 'transit',
  //         elementType: 'geometry',
  //         stylers: [{
  //           color: '#2f3948'
  //         }]
  //       },
  //       {
  //         featureType: 'transit.station',
  //         elementType: 'labels.text.fill',
  //         stylers: [{
  //           color: '#d59563'
  //         }]
  //       },
  //       {
  //         featureType: 'water',
  //         elementType: 'geometry',
  //         stylers: [{
  //           color: '#17263c'
  //         }]
  //       },
  //       {
  //         featureType: 'water',
  //         elementType: 'labels.text.fill',
  //         stylers: [{
  //           color: '#515c6d'
  //         }]
  //       },
  //       {
  //         featureType: 'water',
  //         elementType: 'labels.text.stroke',
  //         stylers: [{
  //           color: '#17263c'
  //         }]
  //       }
  //     ]
  //   });
    // function initMap() {
    //   var map = new google.maps.Map(document.getElementById('travelInfo'), {
    //     center: {
    //       lat: -33.8688,
    //       lng: 151.2195
    //     },
    //     zoom: 13
    //   });
    //   var marker = new google.maps.Marker({
    //     map: map
    //   });
    //   marker.addListener('click', function () {
    //     infowindow.open(map, marker);
    //   });

    // function initMap() {
    //   var map = new google.maps.Map(document.getElementById('searchText'), {
    //     center: {
    //       lat: -33.8688,
    //       lng: 151.2195
    //     },
    //     zoom: 13
    //   });
    //   var marker = new google.maps.Marker({
    //     map: map
    //   });
    //   marker.addListener('click', function () {
    //     infowindow.open(map, marker);
    //   });

    //   autocomplete.addListener('place_changed', function () {
    //     infowindow.close();
    //     var place = autocomplete.getPlace();
    //     if (!place.geometry) {
    //       return;
    //     }

    //     if (place.geometry.viewport) {
    //       map.fitBounds(place.geometry.viewport);
    //     } else {
    //       map.setCenter(place.geometry.location);
    //       map.setZoom(17);
    //     }

    //     // Set the position of the marker using the place ID and location.
    //     marker.setPlace({
    //       placeId: place.place_id,
    //       location: place.geometry.location
    //     });
    //     marker.setVisible(true);

    //     infowindowContent.children['place-name'].textContent = place.name;
    //     infowindowContent.children['place-id'].textContent = place.place_id;
    //     infowindowContent.children['place-address'].textContent =
    //       place.formatted_address;
    //     infowindow.open(map, marker);
    //   });
    // }

    // //   Show local places/stuff
    // var request = {
    //   placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
    //   fields: ['name', 'rating', 'formatted_phone_number', 'geometry']
    // };

    // var service = new google.maps.places.PlacesService(map);
    // service.getDetails(request, callback);

    // function callback(place, status) {
    //   if (status == google.maps.places.PlacesServiceStatus.OK) {
    //     createMarker(place);
    //   }
    // }

    //   });
    // }
    

  


// });