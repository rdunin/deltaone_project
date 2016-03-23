Meteor.startup(function () {
   AccountsGuest.anonymous = true;
   
   process.env.MAIL_URL = 'smtp://postmaster@sandbox53c03974c184407586843130559eafc4.mailgun.org:688247d43df762032188e3c3fc9ee348@smtp.mailgun.org:2525'
   
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
     return "Click this link to reset your password: /reset-password/" + url;
   }
   
});
