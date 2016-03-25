Items = new Mongo.Collection('items');


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
      type: [Images]  
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
