Meteor.publish(null, function (){
  return Meteor.roles.find({})
})

Meteor.publish('search', function () {
  return Search.find({ user: this.userId });
});

Meteor.publish('searchemp', function () {
  return Search.find({});
});

Meteor.publish('searcher', function() {
  var search = Search.find({ user: this.userId });
  return search;
});

Meteor.publish("userStatus", function() {
  return Meteor.users.find({ "status.online": true });
});