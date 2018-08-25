//var gpxXMLUrl = "route";
//console.log("route");
//console.log(route);
// var gpxXMLUrl = "https://rawgit.com/luukvandermeer/Strava_vis/master/Ride.xml";
//var gpxXMLUrl = "https://rawgit.com/adg29/tour-de-france/f5479188bb7bb96e35489770827ed09730e8e8ca/20-strava-thibaut-pinot-Tour_de_France_Etape_20_MAGIQUE_.xml";

var map;

//Load XML file with the GPX parser
function loadGPXFileIntoGoogleMap(map, filename) {
//console.log(filename);
  $.ajax({
    url: filename,
    dataType: "xml",
    success: function(data) {
      console.log('Loaded', filename);
      var parser = new GPXParser(data, map);
      parser.setTrackColour("#42b3f4"); // Set the track line colour
      parser.setTrackWidth(5); // Set the track line width
      parser.setMinTrackPointDelta(0.001); // Set the minimum distance between track points
      parser.centerAndZoom(data);
      parser.addTrackpointsToMap(); // Add the trackpoints
      parser.addWaypointsToMap(); // Add the waypoints
    },
    error: function(request, errorType, errorMessage) {
       console.log("XML AJAX Error: " + errorType + " with error message: " + errorMessage);
      console.log("XML AJAX Error");
    }
  });
}

function initMap(mapUrl = gpxXMLUrl) {
  console.log(mapUrl);
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {

    mapTypeId: google.maps.MapTypeId.ROADMAP,

    // How zoomed in you want the map to start at (always required)
    zoom: 10,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(52.1572, 4.4501), // Leiden

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
]
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);
  console.log('initMap');
  loadGPXFileIntoGoogleMap(map, mapUrl);

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  //  var mapElement = document.getElementById('map');

  // Create the Google Map using our element and options defined above
  //  var map = new google.maps.Map(mapElement, mapOptions);

}
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', initMap);
