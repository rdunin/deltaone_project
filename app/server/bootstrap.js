Meteor.startup(function () {
   AccountsGuest.anonymous = true;
   
   process.env.MAIL_URL = 'smtp://postmaster@sandbox53c03974c184407586843130559eafc4.mailgun.org:688247d43df762032188e3c3fc9ee348@smtp.mailgun.org:2525'
});
