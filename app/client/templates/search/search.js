/*****************************************************************************/
/* Search: Event Handlers */
/*****************************************************************************/
Template.Search.events({
});

/*****************************************************************************/
/* Search: Helpers */
/*****************************************************************************/
Template.Search.helpers({
    search: ()=> {
      //console.log(Router.current().params.query.id);
      //console.log(this.params.query.id);
      var sid = Router.current().params.query.id;
      //return Search.find({user: this.userId, items: { $exists: true, $ne: [] }});
      //, items: {$ne:null}
      //
      
      return Search.findOne({_id: sid});
    },
    searchOne: ()=> {
      //return Search.find({user: this.userId, items: { $exists: true, $ne: [] }});
      //return Search.findOne({items: {$ne:null}});
      var sid = Router.current().params.query.id;
      var ser = Search.findOne({_id: sid, items: {$ne:null}});
      
      if(ser){
        console.log(ser, "One");
        var item = Items.findOne({_id: ser.items});  
        console.log([ser, item]);
      }
      
      return {"search": ser, "item": item};
    }
});

/*****************************************************************************/
/* Search: Lifecycle Hooks */
/*****************************************************************************/
Template.Search.onCreated(function () {
});

Template.Search.onRendered(function () {
});

Template.Search.onDestroyed(function () {
});
