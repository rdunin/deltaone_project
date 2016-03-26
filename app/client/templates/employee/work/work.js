var itemid = "9EDrcayZa9x6axA3c";
var imags = 0;
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
            var img = "<div class='form-group'> <label class='col-sm-2 control-label'>Image</label> <div class='col-sm-10'> <div class='row'> <div class='col-sm-12'> <input type='text' name='images."+i+".url' class='form-control' value='"+this.images[i].url+"' placeholder='Images Url'> </div> </div> </div> </div>";
            $('.itemimage').append(img);    
         }

        //var img = "<div class='form-group'> <label class='col-sm-2 control-label'>Image</label> <div class='col-sm-10'> <div class='row'> <div class='col-sm-12'> <input type='text' name='images' class='form-control' value='' placeholder='Images Url'> </div> </div> </div> </div>";
        //$('.itemimage').append(img);
        
        
        //$('#itemedit').find('[name=images]').val();
        $('#itemedit').find('[name=desc]').val(this.desc);
    },
    'click #addnewimg': function(){
         var img = "<div class='form-group'> <label class='col-sm-2 control-label'>Image</label> <div class='col-sm-10'> <div class='row'> <div class='col-sm-12'> <input type='text' name='images."+imags+".url' class='form-control' value='' placeholder='Images Url'> </div> </div> </div> </div>";
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
       
       $('#querywork').find('[name=queryid]').val(this._id);
       $('#querywork').find('[name=itemid]').val(this.items);
       
       $('.fatrash').attr('qid', this._id);
       
    },
    'click .fatrash': function(e){
       var qid = $(e.currentTarget).attr("qid");
       Meteor.call('deleteSearch', qid);
       $('#querywork').hide();
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
