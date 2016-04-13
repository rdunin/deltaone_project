/*****************************************************************************/
/* Create: Event Handlers */
/*****************************************************************************/
Template.Create.events({
    //Save all order data
    'submit form': function(event){
        event.preventDefault();
        
        var itemId = [];
        itemId[0] = {id: Router.current().params.query.id};
        
        var first_name = event.target.first_name.value;
        var last_name = event.target.last_name.value;
        
        var address = event.target.address.value;
        var town = event.target.town.value;
        
        var zip = event.target.zip.value;
        var email = event.target.email.value;
        var phone = event.target.phone.value;
        
        var lastquery = Session.get('lastquery');
        var price = event.target.price.value;
        
        //Create Order Query
        var sid = Orders.insert({
            first_name: first_name,
            last_name: last_name,
            user: Meteor.userId(),
            guest: Meteor.user().profile.guest,
            address: address,
            town: town,
            zip: zip,
            email: email,
            phone: phone,
            price: price,
            items: itemId,
            lastquery: lastquery,
            status: "Created",
            createAt: new Date()
        });
        
        //Redirect to Checkout
        Router.go('Checkout', {}, {query: 'id='+sid});
        
    }
});

/*****************************************************************************/
/* Create: Helpers */
/*****************************************************************************/
Template.Create.helpers({
    //Get Order Item
    item: ()=> {
      var sid = Router.current().params.query.id;
      return Items.findOne({_id: sid});
    }
});

/*****************************************************************************/
/* Create: Lifecycle Hooks */
/*****************************************************************************/
Template.Create.onCreated(function () {
});

Template.Create.onRendered(function () {
});

Template.Create.onDestroyed(function () {
});
