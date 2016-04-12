/*****************************************************************************/
/* Category: Event Handlers */
/*****************************************************************************/
Template.Category.events({
});

/*****************************************************************************/
/* Category: Helpers */
/*****************************************************************************/
Template.Category.helpers({
   category: ()=> {
      return Category.find({});
   },
   updateCatsId: function(){
      return this._id;
   }
});

/*****************************************************************************/
/* Category: Lifecycle Hooks */
/*****************************************************************************/
Template.Category.onCreated(function () {
});

Template.Category.onRendered(function () {
});

Template.Category.onDestroyed(function () {
});
