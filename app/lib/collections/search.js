Search = new Mongo.Collection('search');


if (Meteor.isServer) {
  Search.allow({
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

Search.attachSchema(new SimpleSchema({
  query: {
    type: String,
    label: "Query",
    max: 200
  },
  items: {
    type: String,
    label: "Items",
    optional: true,
  },
  status: {
    type: String,
    label: "Status",
    allowedValues: ['Created', 'Wait', 'Answer', 'Closed'],
    optional: true,
    autoValue: function(){
        return 'Created'
    },
    autoform: {
        //type: "hidden"
    }
  },
  user: {
    type: String,
    label: "User",
    defaultValue: function(){
         return this.userId
    },
    // autoValue: function(){
    //     return this.userId
    // },
    autoform: {
        //type: "hidden"
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
   deleteSearch: function(id) {
       Search.remove(id);
   },
   AddSearchItem: function(sid, iid) {
      Search.update(sid, {
        $set: {items: iid}
      });
   }
});
