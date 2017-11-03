var mobile = {
   init: function(){
      //$('html').attr('class', 'mobile');
      MBP.scaleFix(); 
      new FastClick(document.body); 
      window.scrollTo(0, 1);
      // load remote contents
      //getRemote('events');
      getRemote('feed');
      
      var body= $('body');
      var nav = $('nav');
      // mobile menu
      nav.on('click', function(){
         $(this).toggleClass('closed');
      });
      // mobile show-more
      body.on('click', '.show-more', function(){
         $(this).next().toggleClass('more');
         $(this).hide();
         return false;
      });
      
      // mobile close
      body.on('click', '.hide-more', function(){
         var section = $(this).closest('section');
         var offset = section.offset();
         section.find('.toggable').toggleClass('more');
         section.find('.show-more').show();
         window.scrollTo(0, offset.top);
         return false;
      });
   }   
}

/* Fix for iPhone viewport scale bug
* http://www.blog.highub.com/mobile-2/a-fix-for-iphone-viewport-scale-bug/
*/  
window.MBP = window.MBP || {}; 
MBP.viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]');
MBP.ua = navigator.userAgent;
MBP.scaleFix = function() {
   if (MBP.viewportmeta && /iPhone|iPad|iPod/.test(MBP.ua) && !/Opera Mini/.test(MBP.ua)) {
   MBP.viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
   document.addEventListener('gesturestart', MBP.gestureStart, false);
   }
};
MBP.gestureStart = function() {
   MBP.viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
};
