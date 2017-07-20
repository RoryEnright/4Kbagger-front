import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // params object and mountain_id from that param
    return this.get('store').findRecord('mountain', params.mountain_id);
  },
  actions: {
    deleteHike (hike) {
      console.log('mountain')
    hike.destroyRecord();
   },
  // deleteHike: function() {
  //   this.get('model.hike').destroyRecord();
  // }
  }
});
