var itemid = "9EDrcayZa9x6axA3c";
var imags = 0;
var competitor = 0;
var count = 0;

//Timer for Query
function searchtime() {
   Tracker.autorun(function(thisComp) {
          Chronos.liveUpdate();
          $('#querywork dd:eq(2)').text(count);
          count++;
          //thisComp.stop(); //Wey to Stop Chronos
   });
}

// Beeps Function
function beeps(){
   var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
   snd.play();
}

//Run Timer
searchtime();

//Parameter for Search
Template.registerHelper("searchbutton", function() {
    return {
      placeholder: "Search item...",
      class: "form-control"
    };
});

/*****************************************************************************/
/* Work: Event Handlers */
/*****************************************************************************/
Template.Work.events({
   //Select Item For change   
   'click .itemid': function(){
        $('#itemedit').show();
        $('#itemedit').find('[name=id]').val(this._id);
        $('#itemedit').find('[name=title]').val(this.title);
        $('#itemedit').find('[name=price]').val(this.price);
        $('#itemedit').find('[name=model]').val(this.model);
        $('#itemedit').find('[name=productid]').val(this.productid);
        
        $('.itemimage').html("");
         
         //console.log(this.images);
         if(this.images === undefined){
            
         }else{
            imags = this.images.length;
            for (var i = 0; i < this.images.length; i++) {
               var img = "<div class='form-group'> <label class='col-sm-2 control-label'>Image</label> <div class='col-sm-8'> <div class='row'> <div class='col-sm-12'> <input type='text' name='images."+i+".url' class='form-control' value='"+this.images[i].url+"' placeholder='Images Url'> </div> </div> </div> <div class='col-sm-2'> <button type='button' class='btn btn-sm btn-fill btn-info remove-item'><span class='glyphicon glyphicon-minus'></span></button> </div> </div>";
               $('.itemimage').append(img);    
            }   
         }
         
         $('.competitor').html("");
         
         if(this.competitor === undefined){
            
         }else{
            competitor = this.competitor.length;
            for (var i = 0; i < this.competitor.length; i++) {
               var comp = "<div class='form-group'> <label class='col-sm-2 control-label'>Store</label> <div class='col-sm-3'> <div class='row'> <div class='col-sm-12'> <input type='text' name='competitor."+i+".store' class='form-control' value='"+this.competitor[i].store+"' placeholder='Competitor Store'> </div> </div> </div> <label class='col-sm-2 control-label'>Price</label> <div class='col-sm-3'> <div class='row'> <div class='col-sm-12'> <input type='text' name='competitor."+i+".price' class='form-control' value='"+this.competitor[i].price+"' placeholder='Competitor Price'> </div> </div> </div> <div class='col-sm-2'> <button type='button' class='btn btn-sm btn-fill btn-info remove-store'><span class='glyphicon glyphicon-minus'></span></button> </div> </div>";
               $('.competitor').append(comp);
            }   
         }
         
         

        $('#itemedit').find('[name=desc]').val(this.desc);
    },
    //Remove Image
    'click .remove-item': function(e){
        $(e.currentTarget).parent().parent().remove();
    },
    //Remove Competitor
    'click .remove-store': function(e){
        $(e.currentTarget).parent().parent().remove();
    },
    //Add New Image to Item
    'click #addnewimg': function(event){
         event.preventDefault();
         var img = "<div class='form-group'> <label class='col-sm-2 control-label'>Image</label> <div class='col-sm-8'> <div class='row'> <div class='col-sm-12'> <input type='text' name='images."+imags+".url' class='form-control' value='' placeholder='Images Url'> </div> </div> </div> <div class='col-sm-2'> <button type='button' class='btn btn-sm btn-fill btn-info remove-item'><span class='glyphicon glyphicon-minus'></span></button> </div> </div>";
         $('.itemimage').append(img);    
         imags++;
    },
    //Add New Competitor to Item
    'click #addnewcomp': function(event){
         event.preventDefault();
         var comp = "<div class='form-group'> <label class='col-sm-2 control-label'>Store</label> <div class='col-sm-3'> <div class='row'> <div class='col-sm-12'> <input type='text' name='competitor."+competitor+".store' class='form-control' value='' placeholder='Competitor Store'> </div> </div> </div> <label class='col-sm-2 control-label'>Price</label> <div class='col-sm-3'> <div class='row'> <div class='col-sm-12'> <input type='text' name='competitor."+competitor+".price' class='form-control' value='' placeholder='Competitor Price'> </div> </div> </div> <div class='col-sm-2'> <button type='button' class='btn btn-sm btn-fill btn-info remove-store'><span class='glyphicon glyphicon-minus'></span></button> </div> </div>";
         $('.competitor').append(comp);    
         competitor++;
    },
    //Select Query
    'click .queryid': function(){
       $('#querywork').show();
       
       var userProfile = Meteor.users.findOne({_id: this.user});
       var userStat;
       if(typeof userProfile == "undefined"){
          userStat = "Unavailable";
       }else{
            
          if(userProfile.profile.guest){
             userStat = "Guest";
          }else{
             userStat = "User";
          }
       }
       
       var queryText = this.query;
       var googImgLink = '<a target="_blank" href="http://images.google.com/search?tbm=isch&q='+queryText+'">'+queryText+'</a>';
       $('#querywork dd:eq(0)').html(googImgLink);
       $('#querywork dd:eq(1)').text(userStat);
       $('#querywork dd:eq(2)').html(moment().diff(this.createdAt, 'seconds'));
       
       count = moment().diff(this.createdAt, 'seconds');
      
       $('#querywork').find('[name=queryid]').val(this._id);
       $('#querywork').find('[name=itemid]').val(this.items);
       $('#semantic input').val(queryText);
       
       $('.fatrash').attr('qid', this._id);
       
    },
    //Delete Query
    'click .fatrash': function(e){
       var qid = $(e.currentTarget).attr("qid");
       Meteor.call('deleteSearch', qid);
       $('#querywork').hide();
    },
    //Delete Item
    'click .itemtrash': function(e){
        var itemid = $('#itemedit').find('[name=id]').val();
        Meteor.call('deleteItem', itemid);
       $('#itemedit').hide();
    },
    //Answer for Query
    'click .sitem': function(e){
       if($('#querywork').is(":visible")){
          var sid = $('#querywork').find('[name=queryid]').val();
          Meteor.call('AddSearchItem', sid, this._id);
          $('#querywork').hide();
       }else{
          alert("Please select search query!");
       }
    },
    // <TBS> fill sem3 data for query
    'click .sem3fill': function(e){
       $('#itemadds').removeClass('hidden');
       var sem3DataEl = $(e.currentTarget).parent().children('[id|=sem3data]');
       var sem3Data = sem3DataEl.text();
       var itemaddsTarget = sem3DataEl.attr('db-target');
       console.log($(e.currentTarget));
       var itemaddsMatch = '[name='+itemaddsTarget+']';
       $('#itemadds').find(itemaddsMatch).val(sem3Data);
    },
    //</TBS>
    //Update Selected Item
    'submit .itemform': function(event){
        event.preventDefault();
        
        var id = $('#itemedit').find('[name=id]').val();
        var title = $('#itemedit').find('[name=title]').val();
        var price = $('#itemedit').find('[name=price]').val();
        var model = $('#itemedit').find('[name=model]').val();
        var productid = $('#itemedit').find('[name=productid]').val();
        var desc = $('#itemedit').find('[name=desc]').val();
        
        var countimg = $('.itemimage .form-group').length;
        var img = [];
         
        for (var i = 0; i < countimg; i++) {
            img[i] = {url: $('.itemimage .form-group input:eq('+i+')').val()};
        }
        
        var countcomp = $('.competitor .form-group').length;
        var comp = [];
        
        console.log("send");
        
        var o = 0;
        for (var i = 0; i <= countcomp; i++) {
           console.log(i)
           var s = i+1;
           comp[o] = {store: $('.competitor .form-group input:eq('+i+')').val(), price: $('.competitor .form-group input:eq('+s+')').val()};
           i++;
           o++;
        }
        
        //Update Item in DB
        Items.update(id, {
            $set: {
                title: title,
                price: price,
                model: model,
                productid: productid,
                desc: desc,
                images: img,
                competitor: comp
            }
        });
        
        $('#itemedit').hide();
    },
    'change .searchquery': function (e) {
      var itemsearch = $(e.currentTarget).val();
      Session.set('searchquery', itemsearch);
    },
    'click #semantic button': function(){
        $('#sem3-accordion').show();
        var query = $('#semantic input').val();
        //console.log(query)
        //var ans = Meteor.call('getproduct', query);
        
        //console.log(ans);
        
        Meteor.call("getproduct", query, function(error, result){
          if(error){
            console.log(error.reason);
            return;
          }else{
            console.log(result);
            
            // <TBS>: Load product data from semantic 3
            //  Currently loads first 3 products
            // loop over each sem3 product
            // todo: show model number
            for (var productInd = 0; productInd < 3; productInd++) {
               var productNum = productInd + 1;
               
               // get css ids for displaying semantic product data
               var productNameID = '#sem3data-name-'+productNum;
               var productCatID = '#sem3data-category-'+productNum;
               var productBrandID = '#sem3data-brand-'+productNum;
               var productModelID = '#sem3data-model-'+productNum;
               var productColorID = '#sem3data-color-'+productNum;
               var featuresID = '#featureList-'+productNum;
               // display basic data
               $(productNameID).text(result.results[productInd].name);
               $(productCatID).text(result.results[productInd].category);
               $(productBrandID).text(result.results[productInd].brand);
               $(productModelID).text(result.results[productInd].model);
               $(productColorID).text(result.results[productInd].color);
               
               // display the product features object of key:value pairs
               var featuresObj = result.results[productInd].features;
               var featuresStr = "";
               for (var key in featuresObj) {
                   // skip loop if the property is from prototype
                   if (!featuresObj.hasOwnProperty(key)) continue;
                   var val = featuresObj[key];
                   var prettyPrint = "<strong>" + key + "</strong>"
                                       + " "  + val + " ";
                   featuresStr = featuresStr.concat(prettyPrint)                    
               }
               //var featuresStr = JSON.stringify(featuresObj);
               $(featuresID).html(featuresStr);
               
               // link to online product page for each store, 
               // and output price list of recent prices for each store
               // and show if product price is currently active
               var stores = result.results[productInd].sitedetails;
               var numStores = stores.length;
               var priceList = "";
               var numCompetitor = 0;
               // var validCompetitors = "walmart.com,amazon.com,bestbuy.com,target.com,overstock.com";
               for (var i = 0; i < numStores; i++) {
                  var store = stores[i].name;
                  var recentOffers = stores[i].recentoffers_count;
                  if (recentOffers>0) { numCompetitor++; };  // not used
                  console.log(store)
                  var numStorePrices = stores[i].latestoffers.length;
                  var storeLink = "<a target='_blank' href='" + stores[i].url + "'>" + store + "</a>";
                  priceList = priceList.concat(storeLink + " (" + recentOffers + "): ");
                  priceList = priceList.concat("<strong db-target='competitorPrice" + numCompetitor + "' " 
                                                + "id='sem3data-price-" + numCompetitor + "'>" 
                                                + stores[i].latestoffers[0].price+"</strong> ");
                  for (var j = 1; j < numStorePrices; j++) {
                     priceList = priceList.concat(stores[i].latestoffers[j].price+" ");
                  }
                  var addCompetitorPriceHtml = '<div class="btn btn-primary btn-xs sem3fill-price">'
                                                    + '<i class="fa fa-copy"></i></div>';
                  priceList = priceList.concat(addCompetitorPriceHtml);
                  priceList = priceList.concat("<br>");
               }
               var sem3ID = '#sem3data-prices-'+productNum;
               $(sem3ID).html(priceList);
               //console.log(result.results[0]);
            }
            // </TBS>
          }
        });
        
    }
});


//Equals Function
Template.registerHelper('equals', function (a, b) {
   return a === b;
});

/*****************************************************************************/
/* Work: Helpers */
/*****************************************************************************/
Template.Work.helpers({
   // <TBS> index of sem3 result
   sem3num: function() {
      return _.map([1,2,3], function(idx) {
         return {sem3i: idx};
      });
   },
   // </TBS>
   //Edited Item
   edititem: function() {
       return Items.findOne({_id: itemid});
   },
   //Get all new Query and Make Beeps on Added New Query
   search: ()=> {
      var search = Search.find({items: null}, {sort: {createdAt: -1}});
      
      // watch the cursor for changes
      var handle = search.observe({
        added:function(Search){
          beeps();
        }
      });

    return search;
   },
   //Count all new Query
   SearchCount: function(){
      return Search.find({items: null}, {sort: {createdAt: -1}}).count();
   },
   //Check user Guest or Aurh
   userGuest: function(){
      var userProfile = Meteor.users.findOne({_id: this.user});
      if(typeof userProfile == "undefined"){
         return "null";
      }else{
         return userProfile.profile.guest;   
      }
   }, 
   //Get User Email
   userName: function() {
        var userProfile = Meteor.users.findOne({_id: this.user});
        return userProfile.emails[0].address;
   },
   //Count All User Online
   usersOnlineCount: function(){
       //event a count of users online too.
       return Meteor.users.find({ "status.online": true }).count();
   },
   //Get All Items
   items: ()=> {
      return Items.find({});
   },
   //All Items wuth Search Index
   itemIndex: () => ItemsIndex,
   //Query Search
   queryChanges: function(){
    return Search.find({items: null}, {sort: {createdAt: -1}});
   
   },
   filteredItem: function () {
      var query = Session.get('searchquery');
      return Items.find({ $or: [ { title: new RegExp(query) }, { desc: new RegExp(query) } ]});
    },
   //Timer for Querys
   Timer: function(){
      Chronos.liveUpdate();
      return moment().diff(this.createdAt, 'seconds');
   }
});

/*****************************************************************************/
/* Work: Lifecycle Hooks */
/*****************************************************************************/
Template.Work.onCreated(function () {
});

Template.Work.onRendered(function () {
});

Template.Work.onDestroyed(function () {
});
