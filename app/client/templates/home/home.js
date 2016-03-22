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
    
    if (Roles.subscription.ready()){
        
        if(Roles.userIsInRole(Meteor.userId(), 'admin')){
            console.log("Admin");
        }else{
            console.log("Guest");
        }
        
        if(Roles.userIsInRole(Meteor.userId(), 'user')){
            console.log("User");
        }else{
            console.log("Guest");
        }
          
    }
    
    
});

Template.Home.onRendered(function () {
    
//   Meteor.call('sendEmail',{
//     to: 'romandunin@gmail.com',
//     from: 'infaman@yandex.ru',
//     subject: 'I really like sending emails with Mailgun!',
//     text: 'Mailgun is totally awesome for sending emails!',
//     html: 'With meteor it&apos;s easy to set up <strong>HTML</strong> <span style="color:red">emails</span> too.'
//   });
   
    //Meteor.call('addrole');
   
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
