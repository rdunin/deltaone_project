/*****************************************************************************/
/* Checkout: Event Handlers */
/*****************************************************************************/
Template.Checkout.events({
  'submit #payment-form': function(event){
    event.preventDefault();
    
    var cardNumber = event.target.cardNumber.value;
    var cardExpiry = event.target.cardExpiry.value;
    var cardCVC = event.target.cardCVC.value;
    var amount = event.target.order_price.value;
    
    //Stripe Key
    Stripe.setPublishableKey("pk_test_4RGBdrdZB3PQ1IJJiFpBwXGI");
    
    console.log(Router.current().params.query.id);
    
  //   Stripe.card.createToken({
		// 	number: cardNumber,
		// 	cvc: cardCVC,
		// 	exp: cardExpiry,
		// }, function(status, response) {
		// 	stripeToken = response.id;
			
		// 	Meteor.call("chargeCard", stripeToken, amount, function(error, result){
  //         if(error){
  //           console.log(error.reason);
  //           return;
  //         }else{
  //           //console.log(result.id);
            
  //           var qid = Router.current().params.query.id;
  //           //Update Item in DB
		//         Orders.update(qid, {
		//             $set: {
		//                 pay_id: result.id,
		//                 status: "Payed"
		//             }
		//         });
		        
		//         Router.go('Success');
            
  //         }
		// 	});
			
		// 	//Meteor.call('chargeCard', stripeToken, amount);
			
			
		// });
    
  }
});

/*****************************************************************************/
/* Checkout: Helpers */
/*****************************************************************************/
Template.Checkout.helpers({
    order: ()=> {
      var sid = Router.current().params.query.id;
      return Orders.findOne({_id: sid});
    },
    item: function(){
      //var item = Meteor.users.findOne({_id: this.user});
      var sid = Router.current().params.query.id;
      var itemid = Orders.findOne({_id: sid});
      return Items.findOne({_id: itemid.items[0].id});
    }
});

/*****************************************************************************/
/* Checkout: Lifecycle Hooks */
/*****************************************************************************/
Template.Checkout.onCreated(function () {
});

Template.Checkout.onRendered(function () {
  
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
