/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
   'submit form': function(event){
        event.preventDefault();
        //Get Query From Search Line
        var search = event.target.search.value;
        
        //Check Query For String And Cut All Code
        check(search, String);
        var tmp = document.createElement("DIV");
        tmp.innerHTML = search;
        var search = tmp.textContent || tmp.innerText || "";
        var search = $.trim(search);
        
        //Create Search Query
        var sid = Search.insert({
            query: search,
            user: Meteor.userId()
        });
        
        //Send SMS
        //Meteor.call('sendSms');
        
        //Redirect To Search Page with id param it's Query ID
        Router.go('search', {}, {query: 'id='+sid});
    },
    'click .employee' : function(){
        //Redirect to Employee Page
         Router.go('EmployeeWork');
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
   
   if (Roles.subscription.ready()){
      if(Roles.userIsInRole(Meteor.userId(), 'user')){
         // Add Avatar Img if user is log in
         var ava = "<img src="+Meteor.user().profile.picture+" width='30px'>"
         $('.dropdown-toggle').prepend(ava);
      }
   }
   
    //Meteor.call('addrole');
   
   $(document).ready(function() {
		
		// Scroll Navigation
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
	
	// Navbar Transperent
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
    // Unbind Scroll on other Pages
    $(document).unbind( "scroll" );
    $(window).scrollTop(0);
});
