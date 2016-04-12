EmployeeController = RouteController.extend({
  
  // A place to put your subscriptions
  // this.subscribe('items');
  // // add the subscription to the waitlist
  // this.subscribe('item', this.params._id).wait();
  
  subscriptions: function() {
    //Subscription for Data from Publish
    this.subscribe('searchemp');
    this.subscribe('items');
    this.subscribe('userStatus');
    this.subscribe('ordersemp');
    this.subscribe('category');
  },
  
  // Work Action
  work: function() {
    //Render Main Employee Work Template
    this.render('Work', {});
  },
  
  // Work Action
  items: function() {
    //Render Items Employee Template
    this.render('Eitems', {});
  },
  
  // Orders Action
  orders: function() {
    //Render Items Employee Template
    this.render('Eorders', {});
  },
  
  // One Order
  oneorder: function() {
    this.render('Oneorder', {});
  },
  
  // Category Action
  category: function() {
    this.render('Category', {});
  },
  
  // Subscriptions or other things we want to "wait" on. This also
  // automatically uses the loading hook. That's the only difference between
  // this option and the subscriptions option above.
  // return Meteor.subscribe('post', this.params._id);
  
  waitOn: function () {
  },
  
  // A data function that can be used to automatically set the data context for
  // our layout. This function can also be used by hooks and plugins. For
  // example, the "dataNotFound" plugin calls this function to see if it
  // returns a null value, and if so, renders the not found template.
  // return Posts.findOne({_id: this.params._id});
  
  data: function () {
    return {
        //Get Item ID from URL and Find Orders in DataBase
        order: Orders.findOne(this.params._id),
        orderId: this.params._id
    };
  },
  
  // You can provide any of the hook options
  
  onRun: function () {
    //Check Admin Role
    if(Meteor.user()){
      if(Roles.userIsInRole(Meteor.userId(), 'admin')){
        this.next();    
      }else{
        Router.go('home');
      }
    }else{
      Router.go('home');
    }
  },
  onRerun: function () {
    this.next();
  },
  onBeforeAction: function () {
    this.next();
  },
  
  // The same thing as providing a function as the second parameter. You can
  // also provide a string action name here which will be looked up on a Controller
  // when the route runs. More on Controllers later. Note, the action function
  // is optional. By default a route will render its template, layout and
  // regions automatically.
  // Example:
  //  action: 'myActionFunction'
  
  action: function () {
    this.render();
  },
  onAfterAction: function () {
  },
  onStop: function () {
  }
});
