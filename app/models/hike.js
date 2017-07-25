import DS from 'ember-data';

export default DS.Model.extend({
  when: DS.attr('string'),
  trail: DS.attr('string'),
  duration: DS.attr('number'),
  note: DS.attr('string'),
  // user: DS.belongsTo('user'),
  // mountain: DS.belongsTo('mountain')
  user_id: DS.attr('number'),
  mountain_id: DS.attr('number')

});
