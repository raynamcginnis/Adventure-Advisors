$("#searchBtn").click(function (event) {
  var geocoder;
  var map;
  var marker;

  /*
   * Google Map with marker
   */
  function initialize() {
    var initialLat = $('.search_latitude').val();
    var initialLong = $('.search_longitude').val();
    initialLat = initialLat ? initialLat : 36.169648;
    initialLong = initialLong ? initialLong : -115.141000;

    var latlng = new google.maps.LatLng(initialLat, initialLong);
    var options = {
      zoom: 16,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("geomap"), options);

    geocoder = new google.maps.Geocoder();

    marker = new google.maps.Marker({
      map: map,
      draggable: true,
      position: latlng
    });

    google.maps.event.addListener(marker, "dragend", function () {
      var point = marker.getPosition();
      map.panTo(point);
      geocoder.geocode({
        'latLng': marker.getPosition()
      }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          map.setCenter(results[0].geometry.location);
          marker.setPosition(results[0].geometry.location);
          $('.search_addr').val(results[0].formatted_address);
          $('.search_latitude').val(marker.getPosition().lat());
          $('.search_longitude').val(marker.getPosition().lng());
        }
      });
    });

  }

  $(document).ready(function () {
    //load google map
    initialize();

    /*
     * autocomplete location search
     */
    var PostCodeid = '#searchText';
    $(function () {
      $(PostCodeid).autocomplete({
        source: function (request, response) {
          geocoder.geocode({
            'address': request.term
          }, function (results, status) {
            response($.map(results, function (item) {
              return {
                label: item.formatted_address,
                value: item.formatted_address,
                lat: item.geometry.location.lat(),
                lon: item.geometry.location.lng()
              };
            }));
          });
        },
        select: function (event, ui) {
          $('.search_addr').val(ui.item.value);
          $('.search_latitude').val(ui.item.lat);
          $('.search_longitude').val(ui.item.lon);
          var latlng = new google.maps.LatLng(ui.item.lat, ui.item.lon);
          marker.setPosition(latlng);
          initialize();
        }
      });
    });

    /*
     * Point location on google map
     */
    $('.get_map').click(function (e) {
      var address = $(PostCodeid).val();
      geocoder.geocode({
        'address': address
      }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          map.setCenter(results[0].geometry.location);
          marker.setPosition(results[0].geometry.location);
          $('.search_addr').val(results[0].formatted_address);
          $('.search_latitude').val(marker.getPosition().lat());
          $('.search_longitude').val(marker.getPosition().lng());
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
      e.preventDefault();
    });

    //Add listener to marker for reverse geocoding
    google.maps.event.addListener(marker, 'drag', function () {
      geocoder.geocode({
        'latLng': marker.getPosition()
      }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[0]) {
            $('.search_addr').val(results[0].formatted_address);
            $('.search_latitude').val(marker.getPosition().lat());
            $('.search_longitude').val(marker.getPosition().lng());
          }
        }
      });
    });
  });
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
  // initMap();
});