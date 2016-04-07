//Create Orders Collection
Orders = new Mongo.Collection('orders');


//Give Access to Collection
if (Meteor.isServer) {
  Orders.allow({
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

//Add Items
Itemid = new SimpleSchema({
    id:{
        type: String,
        label: "ID",
        optional: true
    }
});

//Create Mongo Schema
Orders.attachSchema(new SimpleSchema({
  first_name: {
    type: String,
    label: "First Name",
    max: 200
  },
  last_name: {
    type: String,
    label: "Last Name",
    optional: true,
  },
  user: {
    type: String,
    label: "User",
    defaultValue: function(){
         return this.userId
    }
  },
  guest: {
    type: String,
    label: "Guest",
    optional: true,
  },
  address: {
    type: String,
    label: "Address",
    optional: true,
  },
  town: {
    type: String,
    label: "Town",
    optional: true,
  },
  zip: {
    type: String,
    label: "Zip",
    optional: true,
  },
  email: {
    type: String,
    label: "Email",
    optional: true,
  },
  phone: {
    type: String,
    label: "Phone",
    optional: true,
  },
  price: {
    type: Number,
    label: "Price",
    optional: true,
  },
  pay_id: {
    type: String,
    label: "Pay ID",
    optional: true,
  },
  pay_at:{
      type: Date,
      label: "Pay At",
      optional: true,
      autoform: {
            type: "hidden"
      }
  },
  items: {
      type: [Itemid],
      optional: true,
  },
  lastquery: {
    type: String,
    label: "Last Query",
    optional: true,
  },
  status: {
    type: String,
    label: "Status",
    allowedValues: ['Created', 'Wait', 'Canceled', 'Payed', 'Processing', 'Delivery', 'Ended', 'Shipping', 'Shipped'],
    optional: true,
  },
  createAt:{
      type: Date,
      label: "Create At",
      optional: true,
      autoform: {
            type: "hidden"
      }
  },
  updatedAt:{
      type: Date,
      label: "Update At",
      autoValue: function(){
            return new Date()
      },
      autoform: {
            type: "hidden"
      }
  }
}));
