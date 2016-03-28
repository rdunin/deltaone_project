var itemid = "9EDrcayZa9x6axA3c";
var imags = 0;
var count = 0;

function searchtime() {
   
   Tracker.autorun(function(thisComp) {
          Chronos.liveUpdate();
          $('#querywork dd:eq(2)').text(count);
          count++;
          //thisComp.stop();
   });
   
}

searchtime();

Template.registerHelper("searchbutton", function() {
    return {
      placeholder: "Search item...",
      class: "form-control"
    };
});

/*****************************************************************************/
/* Work: Event Handlers */
/*****************************************************************************/
Template.Work.events({
   'click .itemid': function(){
        $('#itemedit').show();
        //console.log(this);
        //itemid = this._id;
        //$('#itemedit .itid').text(this._id);
        $('#itemedit').find('[name=id]').val(this._id);
        $('#itemedit').find('[name=title]').val(this.title);
        $('#itemedit').find('[name=price]').val(this.price);
        $('#itemedit').find('[name=model]').val(this.model);
        $('#itemedit').find('[name=sku]').val(this.sku);
        
        $('.itemimage').html("");
         //console.log(this.images);
         imags = this.images.length;
         for (var i = 0; i < this.images.length; i++) {
            var img = "<div class='form-group'> <label class='col-sm-2 control-label'>Image</label> <div class='col-sm-8'> <div class='row'> <div class='col-sm-12'> <input type='text' name='images."+i+".url' class='form-control' value='"+this.images[i].url+"' placeholder='Images Url'> </div> </div> </div> <div class='col-sm-2'> <button type='button' class='btn btn-sm btn-fill btn-info remove-item'><span class='glyphicon glyphicon-minus'></span></button> </div> </div>";
            $('.itemimage').append(img);    
         }

        //var img = "<div class='form-group'> <label class='col-sm-2 control-label'>Image</label> <div class='col-sm-10'> <div class='row'> <div class='col-sm-12'> <input type='text' name='images' class='form-control' value='' placeholder='Images Url'> </div> </div> </div> </div>";
        //$('.itemimage').append(img);
        
        
        //$('#itemedit').find('[name=images]').val();
        $('#itemedit').find('[name=desc]').val(this.desc);
    },
    'click .remove-item': function(e){
        $(e.currentTarget).parent().parent().remove();
    },
    'click #addnewimg': function(event){
         event.preventDefault();
         var img = "<div class='form-group'> <label class='col-sm-2 control-label'>Image</label> <div class='col-sm-8'> <div class='row'> <div class='col-sm-12'> <input type='text' name='images."+imags+".url' class='form-control' value='' placeholder='Images Url'> </div> </div> </div> <div class='col-sm-2'> <button type='button' class='btn btn-sm btn-fill btn-info remove-item'><span class='glyphicon glyphicon-minus'></span></button> </div> </div>";
         $('.itemimage').append(img);    
         imags++;
    },
    'click .queryid': function(){
       $('#querywork').show();
       
       var userProfile = Meteor.users.findOne({_id: this.user});
       var userStat;
       if(typeof userProfile == "undefined"){
          userStat = "Unavailable";
       }else{
          //userStat = userProfile.profile.guest;   
          if(userProfile.profile.guest){
             userStat = "Guest";
          }else{
             userStat = "User";
          }
       }
       
       $('#querywork dd:eq(0)').text(this.query);
       $('#querywork dd:eq(1)').text(userStat);
       $('#querywork dd:eq(2)').html(moment().diff(this.createdAt, 'seconds'));
       
       count = moment().diff(this.createdAt, 'seconds');
      
       $('#querywork').find('[name=queryid]').val(this._id);
       $('#querywork').find('[name=itemid]').val(this.items);
       
       $('.fatrash').attr('qid', this._id);
       
    },
    'click .fatrash': function(e){
       var qid = $(e.currentTarget).attr("qid");
       Meteor.call('deleteSearch', qid);
       $('#querywork').hide();
    },
    'click .itemtrash': function(e){
        var itemid = $('#itemedit').find('[name=id]').val();
        Meteor.call('deleteItem', itemid);
       $('#itemedit').hide();
    },
    'click .sitem': function(e){
       if($('#querywork').is(":visible")){
          var sid = $('#querywork').find('[name=queryid]').val();
          Meteor.call('AddSearchItem', sid, this._id);
          $('#querywork').hide();
       }else{
          alert("Please select search query!");
       }
    },
    'submit .itemform': function(event){
        event.preventDefault();
        
        var id = $('#itemedit').find('[name=id]').val();
        var title = $('#itemedit').find('[name=title]').val();
        var price = $('#itemedit').find('[name=price]').val();
        var model = $('#itemedit').find('[name=model]').val();
        var sku = $('#itemedit').find('[name=sku]').val();
        var desc = $('#itemedit').find('[name=desc]').val();
        
        var countimg = $('.itemimage .form-group').length;
        var img = [];
        //var img = new Object();
        //{{images.[0].url
         
         for (var i = 0; i < countimg; i++) {
            //$('.itemimage').append(img);    
             img[i] = {url: $('.itemimage .form-group input:eq('+i+')').val()};
         }
        
        //console.log(img);
        
        Items.update(id, {
            $set: {
                title: title,
                price: price,
                model: model,
                sku: sku,
                desc: desc,
                images: img
            }
        });
        
        $('#itemedit').hide();
    },
    'change .searchquery': function (e) {
      var itemsearch = $(e.currentTarget).val();
      Session.set('searchquery', itemsearch);
    }
});

Template.registerHelper('equals', function (a, b) {
   return a === b;
});

/*****************************************************************************/
/* Work: Helpers */
/*****************************************************************************/
Template.Work.helpers({
   edititem: function() {
       return Items.findOne({_id: itemid});
    },
   search: ()=> {
      //return Search.find({user: this.userId, items: { $exists: true, $ne: [] }});
      return Search.find({items: null}, {sort: {createdAt: -1}});
   },
   SearchCount: function(){
      return Search.find({items: null}, {sort: {createdAt: -1}}).count();
   },
   userGuest: function(){
      var userProfile = Meteor.users.findOne({_id: this.user});
      //console.log(userProfile.profile.guest);
      if(typeof userProfile == "undefined"){
         return "null";
      }else{
         return userProfile.profile.guest;   
      }
   }, 
   userName: function() {
        var userProfile = Meteor.users.findOne({_id: this.user});
        //console.log(userProfile);
        return userProfile.emails[0].address;
   },
   usersOnlineCount: function(){
       //event a count of users online too.
       return Meteor.users.find({ "status.online": true }).count();
   },
   items: ()=> {
      return Items.find({});
   },
   itemIndex: () => ItemsIndex,
   filteredItem: function () {
      var query = Session.get('searchquery');
      
    //   if(query.length < 1){
    //     query = "/ /";
    //   }else{
    //     query = "/"+query+"/";    
    //   }
      
      //console.log(Items.find({ $or: [ { title: query }, { desc: query } ]}).fetch());
      //return Items.find({title: query});
      //Items.find({}, {sort: {score: -1, name: 1} })
      //return Items.find({ title: new RegExp(query) });
      return Items.find({ $or: [ { title: new RegExp(query) }, { desc: new RegExp(query) } ]});
    },
   updateItemId: function(){
      //console.log(itemid);
      return itemid;
      //return this._id;
   },
   editMode: function(){
      
   },
   Timer: function(){
      //this.createdAt;
      Chronos.liveUpdate();
      return moment().diff(this.createdAt, 'seconds');
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
