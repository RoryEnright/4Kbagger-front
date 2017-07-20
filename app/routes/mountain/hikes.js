import Ember from 'ember';

export default Ember.Route.extend({
  deleteHike (hike) {
  hike.destroyRecord();
},

});
