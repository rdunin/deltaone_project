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
        user.profile = options.profile;
        
    }else{
        console.log("ItsGuest");
    }
    
    
    return user;
});