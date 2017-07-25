import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('mountains');
<<<<<<< HEAD
  this.route('mountain', { path: 'mountains/:mountain_id'});
  this.route('hikes');
  this.route('hike', {path: 'hikes/:hike_id'});
=======
  this.route('mountain', { path: 'mountains/:mountain_id'}, function() {
    this.route('hikes');
  });
  this.route('hike-edit',{ path: 'hikes/edit/:id'}); //id = hike id
  this.route('hike-add', { path: 'hikes/add/:id'}); //id = mountain id
>>>>>>> cleanup
});

export default Router;
