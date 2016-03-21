Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/search', {
  name: 'search',
  controller: 'SearchController',
  where: 'client'
});

Router.route('/compare', {
  name: 'compare',
  controller: 'CompareController',
  where: 'client'
});