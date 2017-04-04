import { Template } from 'meteor/templating';
//import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';

export const Rutas = new Mongo.Collection('rutas');

import './main.html';

Template.body.helpers({
  rutas(){

      console.log("entro"+Rutas.find());
    return Rutas.find({});
  },
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
