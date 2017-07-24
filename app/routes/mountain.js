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
   createHike (hike) {
     console.log('trying to create hike', hike)
     let hikeRecord = this.get('store').createRecord('hike', hike);
     hikeRecord.save();
   },
  }
});
