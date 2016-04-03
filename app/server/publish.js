// Puplish User Roles
Meteor.publish(null, function (){
  return Meteor.roles.find({})
})

// Puplish Search Result only for this user
Meteor.publish('search', function () {
  return Search.find({ user: this.userId });
});

// Puplish All Search Result use in Employee Page
Meteor.publish('searchemp', function () {
  return Search.find({});
});

// Puplish Search Result only for this user
Meteor.publish('searcher', function() {
  var search = Search.find({ user: this.userId });
  return search;
});

// Puplish User Status (Online/Offline) in Employee Page
Meteor.publish("userStatus", function() {
  return Meteor.users.find({ "status.online": true });
});

// Publish All Items
Meteor.publish('items', function () {
  //return Items.find({});
  return Items.find({}, {
    sort: {'answers': -1}
  });
});

// Puplish Orders Result only for this user
Meteor.publish('orders', function () {
  return Orders.find({ user: this.userId });
});