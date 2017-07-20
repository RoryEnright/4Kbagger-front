import DS from 'ember-data';

export default DS.Model.extend({
  when: DS.attr('date'),
  trail: DS.attr('string'),
  duration: DS.attr('number'),
  note: DS.attr('string'),
  user: DS.belongsTo('user'),
  mountain: DS.belongsTo('mountain')

});
