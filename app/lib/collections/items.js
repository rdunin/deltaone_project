Items = new Mongo.Collection('items');

ItemsIndex = new EasySearch.Index({
  collection: Items,
  fields: ['title', 'desc'],
  engine: new EasySearch.Minimongo({
    sort: function() { return {answers: -1}; }
  })
});

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

Images = new SimpleSchema({
    url:{
        type: String,
        label: "URL",
        optional: true
    }
});

Items.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  price: {
    type: String,
    label: "Price",
    optional: true,
  },
  model: {
    type: String,
    label: "Model",
    optional: true,
  },
  sku: {
    type: String,
    label: "SKU",
    optional: true,
  },
  images: {
      type: [Images],
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

Meteor.methods({
   deleteItem: function(id) {
       Items.remove(id);
   }
});