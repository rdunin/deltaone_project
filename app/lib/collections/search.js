//Create Search Collection
Search = new Mongo.Collection('search');

//Give Access to Collection
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

//Create Mongo Schema
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
        type: "hidden"
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

//Add Method
Meteor.methods({
   deleteSearch: function(id) {
       Search.remove(id);
   },
   NewSearch:function(id){
     Search.update(id, {
        $set: {items: null}
      });
   },
   AddSearchItem: function(sid, iid) {
      Search.update(sid, {
        $set: {items: iid}
      });
      var aitem = Items.findOne(iid);
      
      if(typeof aitem.answers == 'undefined'){
        var count = 1;
      }else{
        var count = aitem.answers + 1;
      }
      
      Items.update(iid,{
        $set: {answers: count}
      })
   }
});
