/*****************************************************************************/
/* Work: Event Handlers */
/*****************************************************************************/
Template.Work.events({
});

/*****************************************************************************/
/* Work: Helpers */
/*****************************************************************************/
Template.Work.helpers({
   usersOnlineCount:function(){
       //event a count of users online too.
       return Meteor.users.find({ "status.online": true }).count();
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
