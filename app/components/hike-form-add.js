import Ember from 'ember';

export default Ember.Component.extend({
  positionalParams: ['id'],
  auth: Ember.inject.service(),
  store: Ember.inject.service(),
  router: Ember.inject.service('-routing'),
  flashMessages: Ember.inject.service(),

  when: '',
  trail: '',
  duration: null,
  note: '',
  user_id: function() {
    return this.get('auth').get('credentials.id')
  },
  mountain_id: function() {
    this.get('id')
  },
  hike: Ember.computed('when', 'trail', 'duration', 'note', 'mountain_id', 'user_id', function() {
    return {
      when: this.get('when'),
      trail: this.get('trail'),
      duration: this.get('duration'),
      note: this.get('note'),
      mountain_id: this.get('id')
    }
  }),

  actions: {
    createHike() {
      this.get('store').createRecord('hike', this.get('hike')).save()
        .then(() => {
          console.log('saved')
          this.get('router').transitionTo('mountains')
        })
        .then(() => this.get('flashMessages').success('Hike has been added!'))
        .catch((error) => {
          this.get('flashMessages')
            .danger('Problem adding your hike. Please try again.');
        })
    }
  }
});
