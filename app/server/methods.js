/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'server/method_name': function () {
    // server method logic
  },
  'addrole': function(){
    Roles.addUsersToRoles(Meteor.userId(), 'user');
  },
  'addadminrole': function(){
    Roles.addUsersToRoles(Meteor.userId(), 'admin');
  },
  'sendEmail': function(mailFields) {
    Email.send({to:mailFields.to, from: 'meteor@meteor.com', subject:'Добро пожаловать на мой супер проект', html: mailFields.html });
  }
});
