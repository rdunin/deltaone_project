Meteor.startup(function () {
   
   //Node Package
   Future = Npm.require('fibers/future');
   
   //Add Guest Account
   AccountsGuest.anonymous = true;
   
   //Add Some Enviromnet Variable from Settings.json
   process.env.MAIL_URL = Meteor.settings.MAIL_URL;
   process.env.TWILIO_ACCOUNT_SID = Meteor.settings.twilio.TWILIO_ACCOUNT_SID;
   process.env.TWILIO_AUTH_TOKEN = Meteor.settings.twilio.TWILIO_AUTH_TOKEN;
   process.env.TWILIO_NUMBER = Meteor.settings.twilio.TWILIO_NUMBER;
   process.env.TWILIO_NUMBER_TO = Meteor.settings.twilio.TWILIO_NUMBER_TO;
   process.env.STRIPE_PUBLISHABLE_KEY = Meteor.settings.STRIPE_PUBLISHABLE_KEY;
   process.env.STRIPE_SECRET_KEY = Meteor.settings.STRIPE_SECRET_KEY;
   process.env.SEC3_API_KEY = Meteor.settings.SEC3_API_KEY;
   process.env.SEC3_SECRET_KEY = Meteor.settings.SEC3_SECRET_KEY;
   
   //Parameter for System Email
   Accounts.emailTemplates.siteName = "DeltaOne Project";
   Accounts.emailTemplates.from = "DeltaOne Site <info@deltaone.com>";
   
   //For Welcome Email
   Accounts.emailTemplates.enrollAccount.subject = function (user) {
       return "Welcome to DeltaOne, " + user.profile.name;
   };
   
   //For Welcome Email
   Accounts.emailTemplates.enrollAccount.text = function (user, url) {
      return "You have been selected to participate in building a better future!"
        + " To activate your account, simply click the link below:\n\n"
        + url;
   };
   
   //For Reset Password Email Subject
   Accounts.emailTemplates.resetPassword.subject = function (user) {
       return "Reset Password on DeltaOne";
   };
   
   //For Reset Password Email Text
   Accounts.emailTemplates.resetPassword.text = function(user, url) {
     return "Click this link to reset your password: " + url;
   }
   
});
