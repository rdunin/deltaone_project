/*****************************************************************************/
/* Checkout: Event Handlers */
/*****************************************************************************/
Template.Checkout.events({
  'submit #payment-form': function(event){
    event.preventDefault();
    
    //Animation Button
    $('#payment-form').find('[type=submit]').prop('disabled', true);
    $('#payment-form').find('[type=submit]').removeClass("btn-danger");
    $('#payment-form').find('[type=submit]').text("Processing...");
    $('#payment-form').find('[type=submit]').addClass("btn-success");
    
    //Get Card
    var cardNumber = event.target.cardNumber.value;
    var cardExpiry = event.target.cardExpiry.value;
    var cardCVC = event.target.cardCVC.value;
    var amount = event.target.order_price.value;
    
    //Stripe Key
    Stripe.setPublishableKey("pk_test_4RGBdrdZB3PQ1IJJiFpBwXGI");
    
    //Stripe Create Token
    Stripe.card.createToken({
			number: cardNumber,
			cvc: cardCVC,
			exp: cardExpiry,
		}, function(status, response) {
			stripeToken = response.id;
			//Charge Money from Card
			Meteor.call("chargeCard", stripeToken, amount, function(error, result){
          if(error){
            console.log(error.reason);
            
            console.log("Error");
            
            //Animation Button
				    $('#payment-form').find('[type=submit]').removeClass("btn-danger");
				    $('#payment-form').find('[type=submit]').text("Something is wrong...");
				    $('#payment-form').find('[type=submit]').prop('disabled', false);
				    $('#payment-form').find('[type=submit]').text("Refresh Order");
				    
				    Router.go('Checkout', {}, {query: 'id='+Router.current().params.query.id});
			    
          }else{
            var qid = Router.current().params.query.id;
            
            console.log(result);
            
            if(result.type == "StripeInvalidRequestError"){
            	
            	//Animation Button if error
					    $('#payment-form').find('[type=submit]').addClass("btn-danger");
					    $('#payment-form').find('[type=submit]').text("Something is wrong...");
					    $('#payment-form').find('[type=submit]').text("Please check card.");
					    
					    setTimeout( function() {
					    	$('#payment-form').find('[type=submit]').prop('disabled', false);
					    	$('#payment-form').find('[type=submit]').text("Try Pay Again");	
					    } , 5000);
					    
					  }else{
            		//Update Item in DB
				        Orders.update(qid, {
				            $set: {
				                pay_id: result.id,
				                pay_at: new Date(),
				                status: "Payed"
				            }
				        });
				        
				        //Redirect to Success Page
				        Router.go('Success');
            }
            
            
          }
			});
			
			
		});
    
  }
});

/*****************************************************************************/
/* Checkout: Helpers */
/*****************************************************************************/
Template.Checkout.helpers({
	  // Get Order
    order: ()=> {
      var sid = Router.current().params.query.id;
      return Orders.findOne({_id: sid});
    },
    //Get Item
    item: function(){
      var sid = Router.current().params.query.id;
      var itemid = Orders.findOne({_id: sid});
      return Items.findOne({_id: itemid.items[0].id});
    },
    //Data
    datafrom: function() {
    		var sid = Router.current().params.query.id;
      	var ord = Orders.findOne({_id: sid});
        return Chronos.liveMoment(ord.pay_at).fromNow();
   }
});

/*****************************************************************************/
/* Checkout: Lifecycle Hooks */
/*****************************************************************************/
Template.Checkout.onCreated(function () {
});

Template.Checkout.onRendered(function () {
  
  //Jquery Card Validation
  $(document).ready(function() {
		
		var $form = $('#payment-form');
		
		/* Fancy restrictive input formatting via jQuery.payment library*/
		$('input[name=cardNumber]').payment('formatCardNumber');
		$('input[name=cardCVC]').payment('formatCardCVC');
		$('input[name=cardExpiry').payment('formatCardExpiry');

		/* Form validation using Stripe client-side validation helpers */
		jQuery.validator.addMethod("cardNumber", function(value, element) {
			return this.optional(element) || Stripe.card.validateCardNumber(value);
		}, "Please specify a valid credit card number.");

		jQuery.validator.addMethod("cardExpiry", function(value, element) {    
			/* Parsing month/year uses jQuery.payment library */
			value = $.payment.cardExpiryVal(value);
			return this.optional(element) || Stripe.card.validateExpiry(value.month, value.year);
		}, "Invalid expiration date.");

		jQuery.validator.addMethod("cardCVC", function(value, element) {
			return this.optional(element) || Stripe.card.validateCVC(value);
		}, "Invalid CVC.");

		validator = $form.validate({
			rules: {
				cardNumber: {
					required: true,
					cardNumber: true            
				},
				cardExpiry: {
					required: true,
					cardExpiry: true
				},
				cardCVC: {
					required: true,
					cardCVC: true
				}
			},
			highlight: function(element) {
				$(element).closest('.form-control').removeClass('success').addClass('error');
			},
			unhighlight: function(element) {
				$(element).closest('.form-control').removeClass('error').addClass('success');
			},
			errorPlacement: function(error, element) {
				$(element).closest('.form-group').append(error);
			}
		});

		paymentFormReady = function() {
			if ($form.find('[name=cardNumber]').hasClass("success") &&
				$form.find('[name=cardExpiry]').hasClass("success") &&
				$form.find('[name=cardCVC]').val().length > 1) {
				return true;
			} else {
				return false;
			}
		}

		$form.find('[type=submit]').prop('disabled', true);
		var readyInterval = setInterval(function() {
			if (paymentFormReady()) {
				$form.find('[type=submit]').prop('disabled', false);
				clearInterval(readyInterval);
			}
		}, 250);
		
	});
  
});

Template.Checkout.onDestroyed(function () {
});
