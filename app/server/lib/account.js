//Disconnect standart Facebook Service
ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

// Facebook Config
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: "1415166228770419",
    secret: "3f21be5fe73e8d1df78a5b638a23e419"
});

// When User Sign-Up
Accounts.onCreateUser(function(options, user) {
    console.log(user);
    
    
    if(typeof user.profile === "undefined"){
        
        console.log("ItsUser");
        options.profile['guest'] = false;
        var role = ['user','admin'];
        
        //Roles.addUsersToRoles(user._id, 'user');
        
        //Meteor.call('addrole');
        //Meteor.call('addadminrole');
        user.roles = role
        
        
        if(typeof user.emails === "undefined"){
            //When Facebook login
            if (user.services.facebook) {
                
                var address = {
                 "address": user.services.facebook.email,
                 "verified": false
                };
                
                options.profile.fb_id = user.services.facebook.id;
                options.profile.gender = user.services.facebook.gender;
                options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
                user.profile = options.profile;
                user.emails = address;
                
                
            }
        }else{
         
          Meteor.call('sendEmail',{
            to: user.emails.address,
            from: 'info@deltaone.com',
            subject: 'Welcome to DeltaOne',
            //text: '',
            html: '<!DOCTYPE html> <html style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"> <head> <meta name="viewport" content="width=device-width"> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> <title>Welcome!</title> </head> <body bgcolor="#f6f6f6" style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; -webkit-font-smoothing: antialiased; height: 100%; -webkit-text-size-adjust: none; width: 100% !important; margin: 0; padding: 0;"> <table class="body-wrap" bgcolor="#f6f6f6" style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; width: 100%; margin: 0; padding: 20px;"><tr style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"> <td style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"></td> <td class="container" bgcolor="#FFFFFF" style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; clear: both !important; display: block !important; max-width: 600px !important; Margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0;"> <div class="content" style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; display: block; max-width: 600px; margin: 0 auto; padding: 0;"> <table style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; width: 100%; margin: 0; padding: 0;"> <tr style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"> <td style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;" align="center"> <a style="text-decoration: none;" target="_blank" href="https://deltaone-project-rdunin.c9users.io"><img style="vertical-align: text-bottom; height: 50px; margin-bottom: 20px;" height="50" class="main-logo-img" itemprop="logo" src="https://deltaone-project-rdunin.c9users.io/img/logo.png"></a> </td> </tr> <tr style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"> <td style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"> <p style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 1.6em; font-weight: normal; margin: 0 0 10px; padding: 0;"><strong>Welcome</strong></p> <p style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.6em; font-weight: normal; margin: 0 0 10px; padding: 0;">We welcome you to our store.</p> <p style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.6em; font-weight: normal; margin: 0 0 10px; padding: 0;"><strong>You</strong> join the cheaper-than-everyone, one-click buying revolution and let our high-tech command center dehassle shopping.</p> <p style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.6em; font-weight: normal; margin: 0 0 10px; padding: 0;"><b>Never overpay!</b></p> </td> </tr> <tr style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"> <td style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;" align="center"> <table class="btn-primary" cellpadding="0" cellspacing="0" border="0" style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; width: auto !important; Margin: 20px 0; padding: 0;"><tr style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"> <td style="font-family: \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif; font-size: 14px; line-height: 1.6em; border-radius: 25px; text-align: center; vertical-align: top; background: #348eda; margin: 0; padding: 0;" align="center" bgcolor="#348eda" valign="top"> <a href="https://deltaone-project-rdunin.c9users.io" style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 2; color: #ffffff; border-radius: 3px; display: inline-block; cursor: pointer; font-weight: bold; text-decoration: none; background: #EE2D20; margin: 0; padding: 0; border-color: #EE2D20; border-style: solid; border-width: 10px 30px;">Go to site</a> </td> </tr></table> </td> </tr></table> </div> </td> <td style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"></td> </tr></table> <table class="footer-wrap" style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; clear: both !important; width: 100%; margin: 0; padding: 0;"><tr style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"> <td style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"></td> <td class="container" style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; clear: both !important; display: block !important; max-width: 600px !important; margin: 0 auto; padding: 0;"> <div class="content" style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; display: block; max-width: 600px; margin: 0 auto; padding: 0;"> <table style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; width: 100%; margin: 0; padding: 0;"><tr style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"> <td align="center" style="font-family: \'Helvetica Neue\', \'Helvetica\', Helvetica, Arial, sans-serif; font-size: 100%; line-height: 1.6em; margin: 0; padding: 0;"> <a href="http://vk.com/zyteli" target="_blank"><img src="http://zyteli.com/assets/img/vk.png" style="width: 32px; height: 32px; margin-left: 2px; margin-right: 2px; border: 0;" alt="Vkontakte"></a> <a href="https://www.facebook.com/zyteli" target="_blank"><img src="http://zyteli.com/assets/img/fb.png" style="width: 32px; height: 32px; margin-left: 2px; margin-right: 2px; border: 0;" alt="Facebook"></a> </td> </tr></table> </div> </td> </tr></table> </body> </html>'
          });
          
          user.profile = options.profile;
            
        }
        
    }else{
        console.log("ItsGuest");
    }
    
    
    return user;
});