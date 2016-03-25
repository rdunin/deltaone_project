/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
   'submit form': function(event){
        event.preventDefault();
        var search = event.target.search.value;
        console.log(search);
        
        check(search, String);
        
        var tmp = document.createElement("DIV");
        tmp.innerHTML = search;
        var search = tmp.textContent || tmp.innerText || "";
        var search = $.trim(search);
        
        var sid = Search.insert({
            query: search,
            user: Meteor.userId()
        });
        
        Router.go('search', {}, {query: 'id='+sid});
    },
    'click .employee' : function(){
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
    
    // if (Roles.subscription.ready()){
        
    //     if(Roles.userIsInRole(Meteor.userId(), 'admin')){
    //         console.log("Admin");
    //     }else{
    //         console.log("Guest");
    //     }
        
    //     if(Roles.userIsInRole(Meteor.userId(), 'user')){
    //         console.log("User");
    //     }else{
    //         console.log("Guest");
    //     }
          
    // }
    
});

Template.Home.onRendered(function () {
   
   if (Roles.subscription.ready()){
      if(Roles.userIsInRole(Meteor.userId(), 'user')){
         var ava = "<img src="+Meteor.user().profile.picture+" width='30px'>"
         $('.dropdown-toggle').prepend(ava);
         
        //  Meteor.call('sendEmail',{
        //     to: Meteor.user().emails.address,
        //     //from: 'infaman@yandex.ru',
        //     //subject: 'I really like sending emails with Mailgun!',
        //     //text: 'Mailgun is totally awesome for sending emails!',
        //     html: '<!DOCTYPE html> <html style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"> <head> <meta name="viewport" content="width=device-width"> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <title>Welcome!</title> </head> <body bgcolor="#f6f6f6" style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; -webkit-font-smoothing: antialiased; height: 100%; -webkit-text-size-adjust: none; width: 100% !important; margin: 0; padding: 0;"> <table class="body-wrap" bgcolor="#f6f6f6" style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; width: 100%; margin: 0; padding: 20px;"><tr style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"> <td style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"></td> <td class="container" bgcolor="#FFFFFF" style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; clear: both !important; display: block !important; max-width: 600px !important; Margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0;"> <div class="content" style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; display: block; max-width: 600px; margin: 0 auto; padding: 0;"> <table style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; width: 100%; margin: 0; padding: 0;"> <tr style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"> <td style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;" align="center"> <a style="text-decoration: none;" target="_blank" href="https://deltaone-project-rdunin.c9users.io"><img style="vertical-align: text-bottom; height: 50px; margin-bottom: 20px;" height="50" class="main-logo-img" itemprop="logo" src="https://deltaone-project-rdunin.c9users.io/img/logo.png"></a> </td> </tr> <tr style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"> <td style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"> <p style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.6em; font-weight: normal; margin: 0 0 10px; padding: 0;"><strong>Welcome</strong></p> <p style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.6em; font-weight: normal; margin: 0 0 10px; padding: 0;">We welcome you to our store.</p> <p style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.6em; font-weight: normal; margin: 0 0 10px; padding: 0;"><strong>You</strong> join the cheaper-than-everyone, one-click buying revolution and let our high-tech command center dehassle shopping.</p> <p style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.6em; font-weight: normal; margin: 0 0 10px; padding: 0;"><b>Never overpay!</b></p> </td> </tr> <tr style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"> <td style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;" align="center"> <table class="btn-primary" cellpadding="0" cellspacing="0" border="0" style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; width: auto !important; Margin: 20px 0; padding: 0;"><tr style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"> <td style="font-family: \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif; font-size: 14px; line-height: 1.6em; border-radius: 25px; text-align: center; vertical-align: top; background: #348eda; margin: 0; padding: 0;" align="center" bgcolor="#348eda" valign="top"> <a href="https://deltaone-project-rdunin.c9users.io" style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 2; color: #ffffff; border-radius: 3px; display: inline-block; cursor: pointer; font-weight: bold; text-decoration: none; background: #EE2D20; margin: 0; padding: 0; border-color: #EE2D20; border-style: solid; border-width: 10px 30px;">Go to site</a> </td> </tr></table> </td> </tr></table> </div> </td> <td style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"></td> </tr></table> <table class="footer-wrap" style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; clear: both !important; width: 100%; margin: 0; padding: 0;"><tr style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"> <td style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"></td> <td class="container" style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; clear: both !important; display: block !important; max-width: 600px !important; margin: 0 auto; padding: 0;"> <div class="content" style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; display: block; max-width: 600px; margin: 0 auto; padding: 0;"> <table style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; width: 100%; margin: 0; padding: 0;"> </table> </div> </td> </tr></table> </body> </html>'
        // });
         
      }
   }
   
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
