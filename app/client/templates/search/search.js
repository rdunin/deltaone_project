/*****************************************************************************/
/* Search: Event Handlers */
/*****************************************************************************/
Template.Search.events({
  'submit form': function(event){
        event.preventDefault();
        var search = event.target.search.value;
        console.log(search);
        
        check(search, String);
        
        var tmp = document.createElement("DIV");
        tmp.innerHTML = search;
        var search = tmp.textContent || tmp.innerText || "";
        var search = $.trim(search);
        
        var sid = Search.insert({
            query: search,
            user: Meteor.userId()
        });
        
        Router.go('search', {}, {query: 'id='+sid});
   },
  'click .irefresh': function(event){
    event.preventDefault();
    var id = Router.current().params.query.id;
    Meteor.call('NewSearch', id );
  },
  'click .iclose': function(event){
    event.preventDefault();
    var id = Router.current().params.query.id;
    Meteor.call('deleteSearch', id);
    //$('#searchres').hide();
    Router.go('home');
  }
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
      
      return Search.findOne({_id: sid});
    },
    searchOne: ()=> {
      //return Search.find({user: this.userId, items: { $exists: true, $ne: [] }});
      //return Search.findOne({items: {$ne:null}});
      var sid = Router.current().params.query.id;
      var ser = Search.findOne({_id: sid, items: {$ne:null}});
      
      if(ser){
        //console.log(ser, "One");
        var item = Items.findOne({_id: ser.items});
        //console.log([ser, item]);
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
