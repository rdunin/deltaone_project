/*****************************************************************************/
/* Eorders: Event Handlers */
/*****************************************************************************/
Template.Eorders.events({
   //Delete Order
   'click .delorder': function(event){
      event.preventDefault();
      //console.log(this._id);
      Meteor.call('deleteOrder', this._id);
   }
});

/*****************************************************************************/
/* Eorders: Helpers */
/*****************************************************************************/
Template.Eorders.helpers({
   //Get All Orders
   orders: ()=> {
      return Orders.find({},{sort: {updatedAt: -1}});
   },
   //Get Order Date
   datafrom: function() {
        return Chronos.liveMoment(this.createAt).fromNow();
   }
});

/*****************************************************************************/
/* Eorders: Lifecycle Hooks */
/*****************************************************************************/
Template.Eorders.onCreated(function () {
});

Template.Eorders.onRendered(function () {
});

Template.Eorders.onDestroyed(function () {
});
