import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
    model() {
      let id = this.get('auth').get('credentials.id')
    return this.get('store').findAll('hike');
    .query('hike', {
        filter: {
          user_id: id,
          mountain_id:
    },
    actions: {
     deleteHike (hike) {
       hike.destroyRecord()
    }
  }
});
