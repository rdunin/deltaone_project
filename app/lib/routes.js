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

Router.route('/item/:_id', {
  name: 'item',
  controller: 'ItemController',
  where: 'client'
});

Router.route('/employee/work', {
  name: 'EmployeeWork',
  controller: 'EmployeeController',
  action: 'work',
  where: 'client'
});

Router.route('/employee/items', {
  name: 'EmployeeItems',
  controller: 'EmployeeController',
  action: 'items',
  where: 'client'
});