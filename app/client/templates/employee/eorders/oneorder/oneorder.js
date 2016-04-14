/*****************************************************************************/
/* Oneorder: Event Handlers */
/*****************************************************************************/
Template.Oneorder.events({
   //Change Order Status
   'click .updatestatus': function(event){
      event.preventDefault();
      var status = $(".orderstatus").val();
      Meteor.call('statusOrder', status, Template.currentData().order._id);
   }
});

/*****************************************************************************/
/* Oneorder: Helpers */
/*****************************************************************************/
Template.Oneorder.helpers({
   //Get Order User
   'testUser':function(){
      return Template.currentData().order.user;
   },
   //Get Item
   item: function(){
      //var item = Meteor.users.findOne({_id: this.user});
      var itemid = Template.currentData().order.items[0].id;
      return Items.findOne({_id: itemid});
   },
   //Get Date
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
