Meteor.startup(function () {
   AccountsGuest.anonymous = true;
   
   process.env.MAIL_URL = Meteor.settings.MAIL_URL;
   process.env.TWILIO_ACCOUNT_SID = Meteor.settings.twilio.TWILIO_ACCOUNT_SID;
   process.env.TWILIO_AUTH_TOKEN = Meteor.settings.twilio.TWILIO_AUTH_TOKEN;
   process.env.TWILIO_NUMBER = Meteor.settings.twilio.TWILIO_NUMBER;
   process.env.TWILIO_NUMBER_TO = Meteor.settings.twilio.TWILIO_NUMBER_TO;
   
   Accounts.emailTemplates.siteName = "DeltaOne Project";
   Accounts.emailTemplates.from = "DeltaOne Site <info@deltaone.com>";
   
   Accounts.emailTemplates.enrollAccount.subject = function (user) {
       return "Welcome to DeltaOne, " + user.profile.name;
   };
   
   Accounts.emailTemplates.enrollAccount.text = function (user, url) {
      return "You have been selected to participate in building a better future!"
        + " To activate your account, simply click the link below:\n\n"
        + url;
   };
   
   Accounts.emailTemplates.resetPassword.subject = function (user) {
       return "Reset Password on DeltaOne";
   };
   
   Accounts.emailTemplates.resetPassword.text = function(user, url) {
     return "Click this link to reset your password: " + url;
   }
   
});
