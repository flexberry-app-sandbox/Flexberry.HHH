import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-h-h-h-договор-стр-l');
  this.route('i-i-s-h-h-h-договор-стр-e',
  { path: 'i-i-s-h-h-h-договор-стр-e/:id' });
  this.route('i-i-s-h-h-h-договор-стр-e.new',
  { path: 'i-i-s-h-h-h-договор-стр-e/new' });
  this.route('i-i-s-h-h-h-должности-l');
  this.route('i-i-s-h-h-h-должности-e',
  { path: 'i-i-s-h-h-h-должности-e/:id' });
  this.route('i-i-s-h-h-h-должности-e.new',
  { path: 'i-i-s-h-h-h-должности-e/new' });
  this.route('i-i-s-h-h-h-заяв-на-стр-l');
  this.route('i-i-s-h-h-h-заяв-на-стр-e',
  { path: 'i-i-s-h-h-h-заяв-на-стр-e/:id' });
  this.route('i-i-s-h-h-h-заяв-на-стр-e.new',
  { path: 'i-i-s-h-h-h-заяв-на-стр-e/new' });
  this.route('i-i-s-h-h-h-клиент-l');
  this.route('i-i-s-h-h-h-клиент-e',
  { path: 'i-i-s-h-h-h-клиент-e/:id' });
  this.route('i-i-s-h-h-h-клиент-e.new',
  { path: 'i-i-s-h-h-h-клиент-e/new' });
  this.route('i-i-s-h-h-h-пердст-эксп-l');
  this.route('i-i-s-h-h-h-пердст-эксп-e',
  { path: 'i-i-s-h-h-h-пердст-эксп-e/:id' });
  this.route('i-i-s-h-h-h-пердст-эксп-e.new',
  { path: 'i-i-s-h-h-h-пердст-эксп-e/new' });
  this.route('i-i-s-h-h-h-сотрудники-l');
  this.route('i-i-s-h-h-h-сотрудники-e',
  { path: 'i-i-s-h-h-h-сотрудники-e/:id' });
  this.route('i-i-s-h-h-h-сотрудники-e.new',
  { path: 'i-i-s-h-h-h-сотрудники-e/new' });
  this.route('i-i-s-h-h-h-стр-полис-l');
  this.route('i-i-s-h-h-h-стр-полис-e',
  { path: 'i-i-s-h-h-h-стр-полис-e/:id' });
  this.route('i-i-s-h-h-h-стр-полис-e.new',
  { path: 'i-i-s-h-h-h-стр-полис-e/new' });
});

export default Router;
