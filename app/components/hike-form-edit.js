export default Ember.Component.extend({
  positionalParams: ['id'],
  auth: Ember.inject.service(),
  store: Ember.inject.service(),
  router: Ember.inject.service('-routing'),

  when: '',
  trail: '',
  duration: null,
  note: '',
  user_id: function () {
    return this.get('auth').get('credentials.id')
  },
  mountain_id: function () {
    this.get('id')
  },
  hike: Ember.computed('when', 'trail', 'duration', 'note', 'mountain_id', 'user_id', function () {
    return {
      when: this.get('when'),
      trail: this.get('trail'),
      duration: this.get('duration'),
      note: this.get('note'),
      // user_id: this.get('user_id'),
      mountain_id: this.get('id')
    }
  }),
  // hike: {
  //   when: "2016-05-07",
  //   trail: "Falls",
  //   duration: 2,
  //   note: "Test Test!",
  //   user_id: 1,
  //   mountain_id: 3
  // },
  actions: {
  createHike () {
    console.log(this.get('hike'));
    this.get('store').createRecord('hike', this.get('hike')).save().then(() => {
      console.log('saved?')
    })
    // .then(
      // () => {
      //   this.get('router').transitionTo('mountains')
      // }
    // )
  },
 }
});
