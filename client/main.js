import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Rutas } from '../imports/api/rutas.js'

var MAP_ZOOM = 15;

import './main.html';




Meteor.startup(function() {
  GoogleMaps.load({key:'AIzaSyCaJEtneA1POPaPJ7j072LgyKfBT6vuRvI'});
});

Template.body.helpers({
  rutas(){
    return Rutas.find({});
  },
});



Template.map.onCreated(function() {
  var self = this;

  GoogleMaps.ready('map', function(map) {
    //self.autorun(function(){
      var marker;
      var flightPlanCoordinates = [
            {lat: 37.772, lng: -122.214},
            {lat: 21.291, lng: -157.821},
            {lat: -18.142, lng: 178.431},
            {lat: -27.467, lng: 153.027}
          ];
      var flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
          });
      flightPath.setMap(map);
    //});


      // Create and move the marker when latLng changes.
      // self.autorun(function() {
      //   var latLng = Geolocation.latLng();
      //   if (! latLng)
      //     return;

      //   // If the marker doesn't yet exist, create it.
      //   if (! marker) {
      //     marker = new google.maps.Marker({
      //       position: new google.maps.LatLng(latLng.lat, latLng.lng),
      //       map: map.instance
      //     });
      //   }
      //   // The marker already exists, so we'll just change its position.
      //   else {
      //     marker.setPosition(latLng);
      //   }

      //   // Center and zoom the map view onto the current position.
      //   map.instance.setCenter(marker.getPosition());
      //   map.instance.setZoom(MAP_ZOOM);
      // });
    });
});

Template.map.helpers({
  geolocationError: function() {
    var error = Geolocation.error();
    return error && error.message;
  },
  mapOptions: function() {
    //var latLng = Geolocation.latLng();
      // Initialize the map once we have the latLng.
      // if (GoogleMaps.loaded() && latLng) {
      if (GoogleMaps.loaded()){
        return {
          //center: new google.maps.LatLng(latLng.lat, latLng.lng),
          center: {lat: -27.467, lng: 153.027},
          zoom: MAP_ZOOM
        };
      }
    }
  });
//
// Template.ruta.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
