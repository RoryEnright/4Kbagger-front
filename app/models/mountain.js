import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  height: DS.attr('number')

});
