/*****************************************************************************/
/* Item: Event Handlers */
/*****************************************************************************/
Template.Item.events({
});

/*****************************************************************************/
/* Item: Helpers */
/*****************************************************************************/
Template.Item.helpers({
   itemsq: ()=> {
      
    }
});

/*****************************************************************************/
/* Item: Lifecycle Hooks */
/*****************************************************************************/
Template.Item.onCreated(function () {
});

Template.Item.onRendered(function () {
   $(document).ready(function() {
		// Gallery Script
		$(".product_gallery a").click(function() {
			var src = $(this).find('img').attr('src');
		    $('.product-image img').attr('src', src);
		});
		
	});
});

Template.Item.onDestroyed(function () {
});
