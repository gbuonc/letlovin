// http://jsfiddle.net/mekwall/up4nu/

// Cache selectors
var lastId,
   topMenu = $("#navbar"),
   topMenuHeight = topMenu.height()+200,
   // All list items
   menuItems = topMenu.find("a"),
   // Anchors corresponding to menu items
   scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
   if (item.length) { return item; }
   });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop+200
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+($(window).height()/2);   
   // Get id of current scroll item
   var cur = scrollItems.map(function(i){   
      // check if current scroll item is in page
      if ($(this).offset().top < fromTop){
         // return previous items if is fully visible in page (needs sonar.js)
         if($(scrollItems[i-1]).sonar(0, true)){            
            return scrollItems[i-1];
         }else{
            return this;
         }
      }     
   });
   
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});