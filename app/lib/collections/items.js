//Create Items Collection
Items = new Mongo.Collection('items');

//Add EasySearch to Collection for IndexSearch
ItemsIndex = new EasySearch.Index({
  collection: Items,
  fields: ['title', 'desc'],
  engine: new EasySearch.Minimongo({
    sort: function() { return {answers: -1}; }
  })
});

//Give Access to Collection
if (Meteor.isServer) {
  Items.allow({
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

// Category = new Meteor.Collection('Category', { schema: {
//     name: {
//         type: String
//     }
// }});

//Add Images
Images = new SimpleSchema({
    url:{
        type: String,
        label: "URL",
        optional: true
    }
});

//Add Competitor
Competitor = new SimpleSchema({
    store:{
        type: String,
        label: "Store",
        optional: true
    },
    price:{
        type: Number(),
        label: "Price",
        optional: true
    }
});

//Create Mongo Schema
Items.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  price: {
    type: Number,
    label: "Price",
    optional: true,
  },
  model: {
    type: String,
    label: "Model",
    optional: true,
  },
  productid: {
    type: String,
    label: "Product ID",
    optional: true,
  },
  images: {
      type: [Images],
      optional: true,
  },
  competitor: {
      type: [Competitor],
      optional: true,
  },
  desc: {
    type: String,
    label: "Desciption",
    optional: true,
    max: 2000,
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 5,
        class: "desc"
      }
    }
  },
  answers:{
      type: Number,
      label: "Answers",
      min: 0,
      optional: true,
      autoform: {
            type: "hidden"
      }
  },
  createdAt:{
      type: Date,
      label: "Create At",
      autoValue: function(){
            return new Date()
      },
      autoform: {
            type: "hidden"
      }
  }
}));

//Add Method
Meteor.methods({
   deleteItem: function(id) {
       Items.remove(id);
   }
});