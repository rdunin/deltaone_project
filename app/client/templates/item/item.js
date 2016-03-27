/*****************************************************************************/
/* Item: Event Handlers */
/*****************************************************************************/
Template.Item.events({
});

/*****************************************************************************/
/* Item: Helpers */
/*****************************************************************************/
Template.Item.helpers({
   //var sid = Router.current().params.query.id;
   itemsq: ()=> {
      console.log(this._id);
      console.log(Router.current().params._id);
      //var sid = Router.current().params.query.id;
      //return Search.find({user: this.userId, items: { $exists: true, $ne: [] }});
      //, items: {$ne:null}
      //
      
      //return Item.findOne({_id: sid});
    }
});

/*****************************************************************************/
/* Item: Lifecycle Hooks */
/*****************************************************************************/
Template.Item.onCreated(function () {
});

Template.Item.onRendered(function () {
   $(document).ready(function() {
		
		$(".product_gallery a").click(function() {
			var src = $(this).find('img').attr('src');
		    $('.product-image img').attr('src', src);
		});
		
	});
});

Template.Item.onDestroyed(function () {
});
