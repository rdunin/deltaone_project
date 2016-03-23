if(Meteor.isClient){
 
   Accounts.onLogin(function(){
      //Meteor._reload.reload();
      // console.log("login");
      // var ava = "<img src="+Meteor.user().profile.picture+" width='30px' >"
      // $('.dropdown-toggle').prepend(ava);
      // alert($('.dropdown-toggle').text());
   });
   
   Accounts.onLogout(function() {
      //Meteor._reload.reload();
      // console.log("logout");
      // $('.dropdown-toggle img').remove();
      // alert($('.dropdown-toggle').text());
   });
   
}