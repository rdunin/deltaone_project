// Meteor.startup(function(){
//     Meteor.Mailgun.config({
//       username: 'postmaster@sandbox53c03974c184407586843130559eafc4.mailgun.org',
//       password: '688247d43df762032188e3c3fc9ee348',
//       port: 2525
//     });
//  });

//  // In your server code: define a method that the client can call
//  Meteor.methods({
//     'sendEmail': function (mailFields) {
//        console.log("about to send email...");
//        check([mailFields.to, mailFields.from, mailFields.subject, mailFields.text, mailFields.html], [String]);

//        // Let other method calls from the same client start running,
//        // without waiting for the email sending to complete.
//        this.unblock();

//        Meteor.Mailgun.send({
//             to: mailFields.to,
//             from: mailFields.from,
//             subject: mailFields.subject,
//             text: mailFields.text,
//             html: mailFields.html
//        });
//        console.log("email sent!");
//     }
//  });