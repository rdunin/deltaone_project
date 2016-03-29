/*****************************************************************************/
/* Eitems: Event Handlers */
/*****************************************************************************/
Template.Eitems.events({
});

/*****************************************************************************/
/* Eitems: Helpers */
/*****************************************************************************/
Template.Eitems.helpers({
   itemsIndex: () => ItemsIndex,
   updateItemId: function(){
      //console.log(itemid);
      //return itemid;
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
