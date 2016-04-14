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
  //Method To Category from Semantic 3
  'getfullcategory': function(query){
    var future = new Future();
    
    sem3.products.categories_field( "cat_id", query );
    sem3.products.get_categories(
       function(err, categories) {
          if (err) {
             console.log("Couldn't execute request: get_categories");
             return;
          }
          
          future["return"](JSON.parse(categories))
       }
    );
    return future.wait();
  },
  //Method To Product from Semantic 3  
  'getproduct': function(query){
    var future = new Future();
    
    // Build the request 
    sem3.products.products_field( "search", query );
    
   // Run the request 
   sem3.products.get_products(
      function(err, products) {
          if (err) {
            console.log("Couldn't execute request: get_products");
            return;
          }
        
        future["return"](JSON.parse(products))
      }
    );
    
    return future.wait();
  },
  //Method To Charge Money from Card by Stripe
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
        console.log("Payment Error");
        future["return"](err)  
      }else{
        future["return"](charge)  
      }
    });
    
    return future.wait();
  }
});
