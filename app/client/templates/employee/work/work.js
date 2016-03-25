var itemid = "9EDrcayZa9x6axA3c";
/*****************************************************************************/
/* Work: Event Handlers */
/*****************************************************************************/
Template.Work.events({
   'click .itemid': function(){
        $('#itemedit').show();
        console.log(this);
        itemid = this._id;
    }
});

Template.registerHelper('equals', function (a, b) {
   return a === b;
});

/*****************************************************************************/
/* Work: Helpers */
/*****************************************************************************/
Template.Work.helpers({
   edititem: function() {
       return Items.findOne({_id: itemid});
    },
   search: ()=> {
      //return Search.find({user: this.userId, items: { $exists: true, $ne: [] }});
      return Search.find({items: null}, {sort: {createdAt: -1}});
   },
   SearchCount: function(){
      return Search.find({items: null}, {sort: {createdAt: -1}}).count();
   },
   userGuest: function(){
      var userProfile = Meteor.users.findOne({_id: this.user});
      //console.log(userProfile.profile.guest);
      if(typeof userProfile == "undefined"){
         return "null";
      }else{
         return userProfile.profile.guest;   
      }
   }, 
   userName: function() {
        var userProfile = Meteor.users.findOne({_id: this.user});
        //console.log(userProfile);
        return userProfile.emails[0].address;
   },
   usersOnlineCount: function(){
       //event a count of users online too.
       return Meteor.users.find({ "status.online": true }).count();
   },
   items: ()=> {
      return Items.find({});
   },
   updateItemId: function(){
      //console.log(itemid);
      return itemid;
      //return this._id;
   },
   editMode: function(){
      
   }
});

/*****************************************************************************/
/* Work: Lifecycle Hooks */
/*****************************************************************************/
Template.Work.onCreated(function () {
});

Template.Work.onRendered(function () {
});

Template.Work.onDestroyed(function () {
});
