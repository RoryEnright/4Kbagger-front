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
  this.route('mountain', { path: 'mountains/:mountain_id'});
  this.route('hikes');
  this.route('hike', {path: 'hikes/:hike_id'});
});

export default Router;
