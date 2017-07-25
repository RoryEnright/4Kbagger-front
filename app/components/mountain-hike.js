import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  actions: {
    deleteHike () {
      return this.sendAction("deleteHike", this.get('hike'))
      .then(() => this.get('flashMessages').success('Hike has been deleted!'))
      .catch((error) => {
        this.get('flashMessages')
          .danger('Problem deleting your hike. Please try again.');
      })
    },

  }
});
