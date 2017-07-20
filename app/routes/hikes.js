import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      debugger
    return this.get('store').findAll('hike');
    // .query('hike', {
    //     filter: {
          // user_id: ,
          // mountain_id:
    },
});
