import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('mountains');
  this.route('mountain', { path: 'mountains/:mountain_id'}, function() {
    this.route('hikes');
  });
  this.route('hike-edit',{ path: 'hikes/edit/:id'}); //id = hike id
  this.route('hike-add', { path: 'hikes/add/:id'}); //id = mountain id
});

export default Router;
