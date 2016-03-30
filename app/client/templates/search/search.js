/*****************************************************************************/
/* Search: Event Handlers */
/*****************************************************************************/
Template.Search.events({
  'submit form': function(event){
        event.preventDefault();
        //Get Query From Search Line
        var search = event.target.search.value;
        
        //Check Query For String And Cut All Code
        check(search, String);
        var tmp = document.createElement("DIV");
        tmp.innerHTML = search;
        var search = tmp.textContent || tmp.innerText || "";
        var search = $.trim(search);
        
        //Create Search Query
        var sid = Search.insert({
            query: search,
            user: Meteor.userId()
        });
        
        //Send SMS
        Meteor.call('sendSms');
        
        //Redirect To Search Page with id param it's Query ID
        Router.go('search', {}, {query: 'id='+sid});
   },
  'click .irefresh': function(event){
    //Refresh Result
    event.preventDefault();
    var id = Router.current().params.query.id;
    Meteor.call('NewSearch', id );
  },
  'click .iclose': function(event){
    //Close Result
    event.preventDefault();
    var id = Router.current().params.query.id;
    Meteor.call('deleteSearch', id);
    Router.go('home');
  }
});

/*****************************************************************************/
/* Search: Helpers */
/*****************************************************************************/
Template.Search.helpers({
    //Search One Query in DB
    search: ()=> {
      var sid = Router.current().params.query.id;
      return Search.findOne({_id: sid});
    },
    //Search One Query with answer and Item
    searchOne: ()=> {
      var sid = Router.current().params.query.id;
      var ser = Search.findOne({_id: sid, items: {$ne:null}});
      
      if(ser){
        var item = Items.findOne({_id: ser.items});
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
