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
    
  },
  'getproduct': function(query){
    var future = new Future();
    
    var api_key = process.env.SEC3_API_KEY;
    var api_secret = process.env.SEC3_SECRET_KEY;
    //var sem3 = require('semantics3-node')(api_key,api_secret);
    
    var sem3 = Meteor.npmRequire('semantics3-node')(api_key,api_secret);
    
    // Build the request 
    sem3.products.products_field( "search", query );
    //console.log(query+" New");
    
    var answer;
    //var api;
   // Run the request 
   sem3.products.get_products(
      function(err, products) {
          if (err) {
            console.log("Couldn't execute request: get_products");
            return;
          }
        // View results of the request 
        //console.log( "Results of request:\n" + JSON.stringify( products ) );
        //answer = products;
        //console.log("Work");
        
        //var api = JSON.stringify(products);
        //processFile();
        
        future["return"](JSON.parse(products))
      }
    );
    
    //console.log(answer);
    //function processFile() { answer = api; }
    
    //return answer;
    return future.wait();
  },
  'chargeCard': function(stripeToken, amount) {
    var future = new Future();
    var Stripe = StripeAPI(process.env.STRIPE_SECRET_KEY);
    
    Stripe.charges.create({
      amount: amount*100,
      currency: 'usd',
      source: stripeToken
    }, function(err, charge) {
      //console.log(err, charge);
      if(err){
        console.log(err)
        return;
      }else{
        future["return"](charge)  
      }
    });
    
    return future.wait();
  }
});
