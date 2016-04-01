Template._loginButtonsLoggedInDropdown.events({
 'click #login-buttons-edit-profile': function(event) {
    event.stopPropagation();
    Template._loginButtons.toggleDropdown();
    Router.go('Profile');
 }
});


/*****************************************************************************/
/* Navbar: Event Handlers */
/*****************************************************************************/
Template.Navbar.events({
   'click .navbar-brand': function(){
      //alert(Meteor.userId());
   }
});

/*****************************************************************************/
/* Navbar: Helpers */
/*****************************************************************************/
Template.Navbar.helpers({
});

/*****************************************************************************/
/* Navbar: Lifecycle Hooks */
/*****************************************************************************/
Template.Navbar.onCreated(function () {
   
});

Template.Navbar.onRendered(function () {
   //Check User Role and if user Log in add Avatar
   if (Roles.subscription.ready()){
      if(Roles.userIsInRole(Meteor.userId(), 'user')){
         console.log("Add avatar");
         var ava = "<img src="+Meteor.user().profile.picture+" width='30px'>"
         $('.dropdown-toggle').prepend(ava);
      }
   }
});

Template.Navbar.onDestroyed(function () {
});
