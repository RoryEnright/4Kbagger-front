import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteHike () {
      console.log('hello')
      return this.sendAction("deleteHike", this.get('hike'));
    },
  }
});
