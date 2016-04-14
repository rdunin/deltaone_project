/*****************************************************************************/
/* Profile: Event Handlers */
/*****************************************************************************/
Template.Profile.events({
   //Edit Profile
   'click .editone': function(event){
      event.preventDefault();
      var text = $(event.currentTarget).text();
      if (text === "Edit"){
         $(event.currentTarget).text("Save");
      }else{
         $(event.currentTarget).text("Edit");
         var email = $('#personaledit').find('[name=email]').val();
         var password = $('#personaledit').find('[name=password]').val();
      }
      
      $('#personaledit').toggle(); 
      $('#personal').toggle();
   },
   //Edit Data
   'click .editdata': function(event){
      event.preventDefault();
      var text = $(event.currentTarget).text();
      
      if (text === "Edit"){
         $(event.currentTarget).text("Save");
      }else{
         $(event.currentTarget).text("Edit");
         var first_name = $('#shippingedit').find('[name=first_name]').val();
         var last_name = $('#shippingedit').find('[name=last_name]').val();
         
         var address = $('#shippingedit').find('[name=address]').val();
         var town = $('#shippingedit').find('[name=town]').val();
         
         var zip = $('#shippingedit').find('[name=zip]').val();
         var phone = $('#shippingedit').find('[name=phone]').val();
         
         Meteor.users.update({_id:Meteor.user()._id}, { 
            $set: {
               'profile.first_name': first_name,
               'profile.last_name': last_name,
               'profile.address': address,
               'profile.town': town,
               'profile.zip': zip,
               'profile.phone': phone,
            } 
         });
         
         
      }
      $('#shippingedit').toggle(); 
      $('#shipping').toggle();
   }
});

/*****************************************************************************/
/* Profile: Helpers */
/*****************************************************************************/
Template.Profile.helpers({
   //Get User Email
   userEmail: function() {
        //var userProfile = Meteor.users.findOne({_id: this.user});
        //return userProfile.emails[0].address;
        return Meteor.user().emails[0].address;
   },
   //Get User Firstname
   first_name: function() {
        return Meteor.user().profile.first_name;
   },
   //Get User Lastname
   last_name: function() {
        return Meteor.user().profile.last_name;
   },
   //Get Orders
   orders: ()=> {
      return Orders.find({},{sort: {updatedAt: -1}});
   },
   //Get Date
   datafrom: function() {
        return Chronos.liveMoment(this.createAt).fromNow();
   }
});

/*****************************************************************************/
/* Profile: Lifecycle Hooks */
/*****************************************************************************/
Template.Profile.onCreated(function () {
});

Template.Profile.onRendered(function () {
});

Template.Profile.onDestroyed(function () {
});
