var desktop = {      
   init: function(){      
      desktop.nav = $('nav');
      desktop.windowHeight = $(window).height();      
      // init splash screen e main menu
      $('#header-nav').css({'min-height':desktop.windowHeight});
      //$('section').css({'margin-bottom':(desktop.windowHeight/2)}).last().css({'margin-bottom':0});;
      $('#booking').css({'min-height':(desktop.windowHeight/2), 'margin-bottom':0});   
            
      $('section').css({'opacity':'1'});
      desktop.offset = $('nav').offset();  
      desktop.fixMenu();      
      
      $(window).resize(function(){
      	var mas = document.getElementById('masonry-posts');
      	var wall = new Masonry(mas); 
      	desktop.setHeight();
      });      
      $(window).scroll(function(){
         desktop.fixMenu();
      });      
      $('#fbLikeBtn').attr('data-colorscheme', 'dark');
      
      // load concerts & feeds from FB when section is about to be visible is in page
      $('#remote').one('scrollin', { distance: 200 }, function(){
         // getRemote('events');
         getRemote('feed');
      });
   },
   doMasonry: function(){
   	var imgs = $('#feed .basicList li img');
   	var l = imgs.length;
   	$('#feed .basicList li img').bind('load', function() {
   	  l = l-1;
   	  if(l === 0){
   	  	// all images loaded
   	  	var mas = document.getElementById('masonry-posts');
   	  	var wall = new Masonry(mas);
   	  }
      });
   },
   setHeight: function(){
      // set equal column heights for events
      var $col = $('#masonry-concerts li');
      var h = 0;
      $col.each(function(){
         var current = $(this).height();
         h = (current > h)? current : h;
      });
      $col.css('height', h);
   },
   fixMenu: function(){      
      if($(window).scrollTop() >= desktop.offset.top){
         desktop.nav.addClass('fixed');
            }else{
         desktop.nav.removeClass('fixed');
      }
   }         
}
