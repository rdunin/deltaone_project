/*****************************************************************************/
/* Oneorder: Event Handlers */
/*****************************************************************************/
Template.Oneorder.events({
   'click .updatestatus': function(event){
      event.preventDefault();
      var status = $(".orderstatus").val();
      //console.log(status, Template.currentData().order._id)
      Meteor.call('statusOrder', status, Template.currentData().order._id);
   }
});

/*****************************************************************************/
/* Oneorder: Helpers */
/*****************************************************************************/
Template.Oneorder.helpers({
   'testUser':function(){
      //console.log(Template.currentData().order.user);
      return Template.currentData().order.user;
   },
   item: function(){
      //var item = Meteor.users.findOne({_id: this.user});
      var itemid = Template.currentData().order.items[0].id;
      return Items.findOne({_id: itemid});
   },
   datafrom: function() {
    	return Chronos.liveMoment(Template.currentData().order.pay_at).fromNow();
   }
});

/*****************************************************************************/
/* Oneorder: Lifecycle Hooks */
/*****************************************************************************/
Template.Oneorder.onCreated(function () {
});

Template.Oneorder.onRendered(function () {
});

Template.Oneorder.onDestroyed(function () {
});
