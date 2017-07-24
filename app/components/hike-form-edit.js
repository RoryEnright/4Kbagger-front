import Ember from 'ember';

export default Ember.Component.extend({
  positionalParams: ['id'],
  auth: Ember.inject.service(),
  store: Ember.inject.service(),
  router: Ember.inject.service('-routing'),

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
    updateHike() {
      this.get('store').findRecord('hike', this.get('id')).then(
        (record) => {
          record.set('when', this.get('hike').when);
          record.set('trail', this.get('hike').trail);
          record.set('duration', this.get('hike').duration);
          record.set('note', this.get('hike').note);
          record.save()
            .then(() => {
              this.get('router').transitionTo('mountains')
            })
            .catch((error) => {
              this.get('flashMessages')
                .danger('Problem editing your hike. Please try again.');
            })
        })
    }
  }
});
