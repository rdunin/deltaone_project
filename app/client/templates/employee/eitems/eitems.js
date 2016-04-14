/*****************************************************************************/
/* Eitems: Event Handlers */
/*****************************************************************************/
Template.Eitems.events({
});

/*****************************************************************************/
/* Eitems: Helpers */
/*****************************************************************************/
Template.Eitems.helpers({
   //Update Item ID
   itemsIndex: () => ItemsIndex,
   updateItemId: function(){
      return this._id;
   }
});

/*****************************************************************************/
/* Eitems: Lifecycle Hooks */
/*****************************************************************************/
Template.Eitems.onCreated(function () {
});

Template.Eitems.onRendered(function () {
});

Template.Eitems.onDestroyed(function () {
});
