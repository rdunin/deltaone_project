/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'server/method_name': function () {
    // server method logic
  },
  //Method To Add User Roles
  'addrole': function(){
    Roles.addUsersToRoles(Meteor.userId(), 'user');
  },
  //Method To Add Admin Roles
  'addadminrole': function(){
    Roles.addUsersToRoles(Meteor.userId(), 'admin');
  },
  //Method To Send Email
  'sendEmail': function(mailFields) {
    Email.send({to: mailFields.to, from: 'info@deltaone.com', subject: mailFields.subject, html: mailFields.html });
    console.log("Email Sended");
  },
  //Method To Send SMS
  'sendSms': function(){
    
    HTTP.call(
        "POST",
        'https://api.twilio.com/2010-04-01/Accounts/' + 
        process.env.TWILIO_ACCOUNT_SID + '/SMS/Messages.json', {
            params: {
                From: process.env.TWILIO_NUMBER,
                To: process.env.TWILIO_NUMBER_TO,
                Body: 'You have new search query!'
            },
            // Set your credentials as environment variables 
            // so that they are not loaded on the client
            auth:
                process.env.TWILIO_ACCOUNT_SID + ':' +
                process.env.TWILIO_AUTH_TOKEN
        },
        // Print error or success to console
        function (error) {
            if (error) {
                console.log(error);
            }
            else {
                console.log('SMS sent successfully.');
            }
        }
    );
    
  }
});
