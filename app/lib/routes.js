//Router Config
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

//Router Home Page
Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});
//Router Search Page
Router.route('/search', {
  name: 'search',
  controller: 'SearchController',
  where: 'client'
});
//Router Compare Page
Router.route('/compare', {
  name: 'compare',
  controller: 'CompareController',
  where: 'client'
});
//Router One Item Page
Router.route('/item/:_id', {
  name: 'item',
  controller: 'ItemController',
  where: 'client'
});
//Router Main Employee Page
Router.route('/employee/work', {
  name: 'EmployeeWork',
  controller: 'EmployeeController',
  action: 'work',
  where: 'client'
});
//Router Main Employee Items Page
Router.route('/employee/items', {
  name: 'EmployeeItems',
  controller: 'EmployeeController',
  action: 'items',
  where: 'client'
});

//Router Orders Page
Router.route('/order/create', {
  name: 'OrdersCreate',
  controller: 'OrderController',
  action: 'create',
  where: 'client'
});

//Router Checkout Page
Router.route('/checkout', {
  name: 'Checkout',
  controller: 'CheckoutController',
  where: 'client'
});

//Router Profile Page
Router.route('/profile', {
  name: 'Profile',
  controller: 'ProfileController',
  where: 'client'
});