/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
   'submit form': function(event){
    event.preventDefault();
    var search = event.target.search.value;
    console.log(search);
    
    //console.log(sid);
    
     Router.go('search', {}, {query: 'query='+search});
    }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
    
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
    
});

Template.Home.onRendered(function () {
   
   $(document).ready(function() {
		
		$('#navi').onePageNav({
    	   currentClass: 'active',
       	changeHash: false,
    		scrollSpeed: 1200,
    		scrollOffset: 0,
    		scrollThreshold: 0.5,
    		begin: function() {
    			
    		}
        });
		
	});
	
	transparent = true;
	
	$(document).scroll(function() {
    if( $(this).scrollTop() > 60 ) {
        if(transparent) {
            transparent = false;
            $('nav[role="navigation"]').removeClass('navbar-transparent');
        }
    } else {
        if( !transparent ) {
            transparent = true;
            $('nav[role="navigation"]').addClass('navbar-transparent');
        }
    }
	});
   
});

Template.Home.onDestroyed(function () {
    $(document).unbind( "scroll" );
    $(window).scrollTop(0);
});
