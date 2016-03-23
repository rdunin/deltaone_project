// Template._loginButtonsLoggedInDropdown.events({
//  'click #login-buttons-edit-profile': function(event) {
//     event.stopPropagation();
//     Template._loginButtons.toggleDropdown();
//     Router.go('profileEdit');
//  }
// });


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
   if(Roles.userIsInRole(Meteor.userId(), 'user')){
      var ava = "<img src="+Meteor.user().profile.picture+" width='30px'>"
      $('.dropdown-toggle').prepend(ava);
   }
});

Template.Navbar.onDestroyed(function () {
});
