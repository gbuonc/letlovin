// init spinners
var spinner = {};
var opts = {
  lines: 13, 
  length: 1, 
  width: 3,
  radius: 8, 
  corners: 0, 
  trail: 26, 
  hwaccel: true, 
  top:35
};

// GET ASYNC DATA FROM FB
var fbEventsGraph = 'https://graph.facebook.com/letlovin/events?fields=name,description,location&access_token=390253567719306%7C-MSuVYmEpw5bLY-bsmopJd4ISS8&callback=?'; 
var fbPostsGraph = 'https://graph.facebook.com/letlovin/posts?access_token=390253567719306%7C-MSuVYmEpw5bLY-bsmopJd4ISS8&limit=40&callback=?'; 
var remote={
   load:{
      //events:$.getJSON(fbEventsGraph)
      feed: $.getJSON(fbPostsGraph)
   }
}
var getRemote = function(section){
   spinner[section] = new Spinner(opts).spin(document.getElementById(section));
   var target='#'+section;
   var now = moment();
   $.when(remote.load[section])
   .then(spinner[section].stop())
   .done(function(response){
      // prepare output
      $.each(response.data,function(){
         if(section === 'events'){
            this.name = clearEvent(this.name);
            this.start_time = moment(this.start_time).format("MMMM DD, YYYY");
            this.gone = now.diff(this.start_time, 'days');
            this.link = 'http://www.facebook.com/events/'+this.id;
            // add only upcoming events
            if(this.gone <= 1){
               this.start_time = moment(this.start_time).format("MMMM DD, YYYY"); 
               fb.events.unshift(this);   
            }           
         }
         else{
            if(!this.message || this.type === 'swf') return true; 
            this.message = urlHyperlinks(this.message); 
            var categ = 'is'+capitalise(this.type);
            this[categ] = true;
            this.date = moment(this.created_time).fromNow(); 
            fb.posts.push(this);   
         }
      });    
      // write to page      
      var source = $("#"+section+"-template").html();
      var template = Handlebars.compile(source);
      var output = template(fb);
      if(fb.events.length == 0 && section === 'events'){
         $(target).append('<div class="boxed"><p>Sorry, no live concerts at the moment. Check back soon.</p></div>');
      }else{
         $(target).append(output);      
      }       
      if(!isMobile && section ==='feed') desktop.doMasonry();
      if(!isMobile && section ==='events') desktop.setHeight();
   })
   .fail(function(){      
      $(target).html('<div class="boxed"><p>Sorry, an error has occurred. Please reload the page.</p></div>');
   });
}

// UTILS -------------------------------------
// handlebars block helper
Handlebars.registerHelper('customList', function(context, block) {
   var listID = isMobile ? '' : 'masonry-'+block.hash.tag;
  var ret = "<ul class='basicList' id='"+listID+"'>";
  var j = j=context.length;
   for(var i=0; i<j; i++) {
   	if(i===0 && j>1 && isMobile){
   		ret = ret + '<li class="first boxed clearfix">'+ block.fn(context[i]) + '</li></ul>';
   		ret = ret + '\n<a href="#" class="btn show-more">View more '+block.hash['tag']+'<span class="icon-down"></span></a>';
   		ret = ret + '\n<ul class="basicList more toggable clearfix">';
   	}else{
   		ret = ret + '<li class="boxed clearfix">' + block.fn(context[i]) + '</li>';
   	}   	
   }  
   if(j>1 && isMobile){
      ret = ret + '<li class="no-style"><a href="#" class="btn hide-more">Hide<span class="icon-up"></span></a></li>';
   }
  return ret + "</ul>";
});
function capitalise(string){
   return string.charAt(0).toUpperCase() + string.slice(1);
}  
function urlHyperlinks(str){
   return str.replace(/\b((http|https):\/\/\S+)/g,'<br><a href="$1" class="truncate" target="_blank">$1</a>');
}
function clearEvent(str){
   // remove string "LETLO VIN"
   return str.replace(/LETLO VIN @/,'');         
}

// FB + GOOGLE -------------------------------------
// facebook social 
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/it_IT/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));                  
// google analitycs    
var _gaq=[['_setAccount','UA-37479520-1'],['_trackPageview']];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
s.parentNode.insertBefore(g,s)}(document,'script'));