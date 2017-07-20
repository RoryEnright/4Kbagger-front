import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  hikes: DS.hasMany('hike'),
  mountains: DS.hasMany('mountain')
});
