//Create Category Collection
Category = new Mongo.Collection('category');

//Give Access to Collection
if (Meteor.isServer) {
  Category.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}

//Create Mongo Schema
Category.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200
  }
}));

//Add Method
Meteor.methods({
   deleteCat: function(id) {
       Category.remove(id);
   }
});