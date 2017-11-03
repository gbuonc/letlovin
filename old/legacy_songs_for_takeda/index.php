<!doctype html>  
<html>
<head>
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
   <title>Letlo Vin</title>
   <meta name="description" content="A Folk'n'Roll live act with the spirit of Soul and Gospel Music">
   <!--  Mobile -->
   <meta name="viewport" content="width=device-width, initial-scale=1.0;">
   <meta name="apple-mobile-web-app-capable" content="yes">
   <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">   
   <meta name="HandheldFriendly" content="True">   <!-- BlackBerry -->
   <meta name="MobileOptimized" content="320"/>    <!-- Windows -->
   <meta http-equiv="cleartype" content="on">      <!-- Mobile IE -->  
   
   <link href="http://fonts.googleapis.com/css?family=Alfa Slab One&subset=latin" rel="stylesheet" type="text/css"> 
   <link href='http://fonts.googleapis.com/css?family=Bitter:400,700' rel='stylesheet' type='text/css'>   
   <link rel="stylesheet" href="assets/css/icons.css" >   
   <script src="assets/js/vendor/modernizr.js"></script>
   <link rel="stylesheet" href="assets/css/base.css">   
   <link rel="stylesheet" media="screen and (min-width:620px)" href="assets/css/full.css">
   <!--[if (lt IE 9)&(!IEMobile 7)]> 
   <link rel="stylesheet" href="assets/css/full.css">
   <link rel="stylesheet" href="assets/css/iefix.css">
   <![endif]-->
   <link rel="shortcut icon" href="/favicon.ico">
</head>
<body>
   <!--[if lte IE 7]>
      <p class="chromeframe"><strong>You are using an outdated browser</strong>.<br />Please <a href="http://browsehappy.com/" target="_blank">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true" target="_blank">activate Google Chrome Frame</a> to improve your experience.</p>
   <![endif]-->
   <div id="fb-root"></div>
   <a id="letlovin" name="letlovin"></a>
   <div id="fixed-bg"></div>
   <div id="main-wrap">
      <article>         
         <section id="header-nav" class="fading">            
            <header class="boxed">
               <nav class="closed animated custom">
                  <ul class="navbar" id="navbar">
                     <li id="backHome"><a href="#letlovin">Letlo Vin</a></li>
                     <li><a href="#about">About</a></li>
                     <li><a href="#events">Concerts</a></li>
                     <li><a href="#feed">Posts</a></li>                     
                     <li><a href="#music">Music</a></li>
                     <li><a href="#booking">Booking & Contacts</a></li>
                  </ul>
               </nav>
               <h1>Letlo Vin</h1>
               <p class="claim">A Folk'n'Roll live act with the spirit of Soul and Gospel Music</p>      
            </header>
         </section>   
         <!-- ........... -->         
         <section id="about">
            <h2>About</h2>
            <div class="boxed">
              <p class="white-bg boxed">On a Friday evening, 26th nov. 2004, Letlo Vin got a phone call from a young woman screaming and crying. Soon after, while stumbling down the stairs, he was called by the local newspaper. <strong>Takeda is dead, they said.</strong></p><br /> 
               <a href="#" class="btn show-more">more +</a>       
               <div class="more toggable">
                  <p class="white-bg">Yes...I know...I'm going to his house right now.<br />
                  Some says he killed himself, we know he was a very fond friend of yours, may I ask...<br />
                  Don't say a word, please. I know. I'm going right now.<br />
                  The car ran fast. Letlo's heart ran faster. Tears bursted in his eyes. Fuck, how could you wish to die at 28? How could you do this to me?</p>
                  <p>The car reached the solitary road where Takeda and his wife bought a small flat with a 25 years mortgage. A foggy 24hrs bar was right beside the flat.<br />
                  Antonio was there. He hadn't been told yet. Letlo told him.<br />
                  The peruvian neighbour didn't want to open the gate. Letlo swore kicked climbed got in.</p>
                  <p class="clear">A young woman, an old man and an old woman were crying.<br /> 
                  Then all his friends came. Everybody was trying to recollect all those good memories and hide pain. But pain was rising like a dark mist in the room. Everybody was seeing it.<br />
                  Many hours later Letlo got out. Antonio was still right there where he had met him. He hadn't said a word since. Motionless. Surrendered.</p>
                  <p>Takeda lays buried in a country churchyard where he is supposed to rest in peace, finally.<br />
                  Letlo Vin composed some songs in his memory some years later and promised never to surrender.</p>
                  <a href="#" class="btn hide-more">close<span class="icon-cancel"></span></a>
               </div>  
            </div>            
         </section>   
         <div class="screen-center" id="remote">
            <section id="events">			
               <h2>Upcoming Concerts</h2>
               <a href="http://www.songkick.com/artists/5468098" class="songkick-widget" data-theme="light" data-detect-style="true" data-background-color="transparent"></a>
<script src="//widget.songkick.com/widget.js"></script>
                <!-- <ul class='basicList clearfix'>
				<?php
				$request = "https://www.kimonolabs.com/api/60119xxw?apikey=46ef7bb21f53170ce0aacf4f0fdec7a0";
				$response = file_get_contents($request);
				$results = json_decode($response, TRUE);
				$arr = $results['results']['Letlo Vin Tour'];
				//var_dump($arr) ;
				
				for ($i = 0; $i < count($arr); $i++) { ?>
					<li class="boxed clearfix">
						<span class="icon-music ico"></span>
						<div class="event-date"><?=$arr[$i]['Date'];?></div>
     					<div class="event-venue">
							<strong><?=$arr[$i]['Venue'];?></strong><br>
  						</div>
						<div class="event-location">
						<?=$arr[$i]['Address'];?> <?=$arr[$i]['City'];?>
  			   		<a href="<?=$arr[$i]['map'];?>" target="_blank" class="direction">Get Directions</a>
						</div>
                </li>
				<?php }
				?>
                </ul>
               <script id="events-template" type="text/x-handlebars-template">   
         			{{#customList events tag="concerts"}}
         			<span class="icon-music ico"></span>
         			<div class="event-date">{{start_time}}</div>
         			<div class="event-venue">
         			   <a href="{{link}}" target="_blank" class="icon-right">
      					{{name}}
      					</a>
      				</div>
   					<div class="event-location">
   					   <strong>{{location}}</strong>
   					   <?php  //{{#if description}}<br>{{description}}{{/if}} ?> 
   					</div>   
   				{{/customList}}
   				<div class="clear"></div>
               </script> -->
            </section>
            <!-- ........... -->
            <section id="feed">
               <h2>Posts</h2>
               <script id="feed-template" type="text/x-handlebars-template">
                  {{#customList posts tag="posts"}}  
                     <span class="icon-{{type}} ico"></span>                  
                     {{#if name}}
                        <div class="feed-title">
                           {{name}}
                         </div>
      					{{/if}}
                     {{#if picture}}
                        {{#if link}}<a href="{{link}}" target="_blank" class="media-link">{{/if}}
                        <img src="{{picture}}" class="pic" alt=""/>
                         {{#if link}}<!-- <span class="icon-{{type}}"></span> --> </a>{{/if}}
                     {{/if}}    
                     <div class="feed-message">
                        {{{message}}}
                     </div>         
                     {{#if description}}
                        {{#unless isVideo}}     
                           <div class="feed-description">
                              {{description}}          
                           </div>   
                        {{/unless}}
                     {{/if}}
                     {{#if link}}<a href="{{link}}" class="btn clear icon-right feed-btn">View</a>{{/if}}                  
                     <div class="feed-date clear">{{date}}</div>
                 {{/customList}}      
               </script>  
            </section> 
            <!-- ........... --> 
            <section id="music" class="clear">
               <h2>Music</h2>
               <div class="boxed clearfix">
                   <p><b>Songs for Takeda is out!</b></p> 
                   <p>Listen for free on <a href="https://play.spotify.com/album/0xSl40D8JdEozjH17xUbpb" target="_blank">Spotify</a> and <a href="https://soundcloud.com/letlovin/sets/songs-for-takeda" target="_blank">Soundcloud</a>, or buy full album on <a href="https://itunes.apple.com/it/artist/letlo-vin/id915958239?ign-mpt=uo%3D4" target="_blank">Itunes</a> , <a href="http://www.amazon.it/Songs-Takeda-Letlo-Vin/dp/B00NDO1H4S/ref=sr_1_1?ie=UTF8&qid=1412236025&sr=8-1&keywords=songs+for+takeda" target="_blank">Amazon</a> or <a href="https://play.google.com/store/music/album/Letlo_Vin_Songs_for_Takeda?id=Bkuvaf4soklwosmlfwgxuucochi&hl=it" target="_blank">Google Play</a>.</p>    
                   <iframe class="iframe" width="100%" height="465" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/letlovin/sets/songs-for-takeda&amp;auto_play=false&amp;buying=true&amp;liking=true&amp;download=true&amp;sharing=true&amp;show_artwork=true&amp;show_comments=false&amp;show_playcount=false&amp;show_user=true&amp;hide_related=false&amp;visual=true&amp;start_track=0&amp;callback=true">
      </iframe>
                  
               </div>               
            </section> 
         </div>       
         
         <!-- ........... -->   
         <div class="screen-wood clear">
            <section id="booking">
               <h2>Booking & Contacts</h2>
               <p>Letlo Vin is managed by <a href="http://www.truebooking.org" target="_blank">True Artists</a>.<br />
               For contacts and enquiries call<br /><strong class="tel">+39 347 4808 219</strong> (Max)<br />or  write to <script type="text/javascript">document.write(
               "<n uers=\"znvygb:vasb\100gehrobbxvat\056bet\">vasb\100gehrobbxvat\056bet<\057n>".replace(/[a-zA-Z]/g, function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);}));
               </script>.</p>
               You can write to Letlo by e-mail at 
               <script type="text/javascript">document.write(
                  "<n uers=\"znvygb:vasb\100yrgybiva\056pbz\">vasb\100yrgybiva\056pbz<\057n>".replace(/[a-zA-Z]/g, function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);}));
               </script> 
                <p>&nbsp;</p>
                <h2>Press Office</h2>
                <p><strong>Astarte Agency</strong> - <a href="mailto:cesare@astarteagency.it">cesare@astarteagency.it </a>- <a href="http://www.astarteagency.it">www.astarteagency.it</a></p>   
            </section>     
             
            <!-- ........... -->         
            <section id="social">  
               <h3>Social Networks</h3>
               <ul class="socialList">
                  <li><a href="http://facebook.com/letlovin" class="btn btn-fb animated" target="_blank" title="Facebook">Facebook</a> </li>
						<li><a href="http://youtube.com/letlovin" class="btn btn-yt animated" target="_blank" title="YouTube">YouTube</a> </li>
                  <li><a href="http://reverbnation.com/letlovin" class="btn btn-rn animated" target="_blank" title="ReverbNation">Reverb Nation</a> </li>
               </ul>
               <div id="fbLikeBtn" class="fb-like" data-href="http://www.facebook.com/letlovin" data-send="false" data-layout="button_count" data-width="450" data-show-faces="false" data-colorscheme="light"></div>
            </section>
         </div>
      </article>
	

   </div>
   <script>
      var isMobile = /ip(hone|od)|android|blackberry.*applewebkit/i.test(navigator.userAgent),
          fb = {posts : [], events: []}; 
            
      Modernizr.load([{
         load : ['//ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.js', 'assets/js/vendor/spin.min.js', 'assets/js/vendor/handlebars.js', 'assets/js/vendor/moment.js']      
      },
      {
         // CONDITIONAL LOADING DESKTOP/MOBILE SCRIPTS
         test : isMobile,
         load: ['assets/js/common.js'],
         yep: ['assets/js/vendor/fastclick.js', 'assets/js/mobile.js'],
         nope: ['assets/js/vendor/masonry.js', 'assets/js/vendor/jquery.sonar.min.js', 'assets/js/vendor/scrollspy.js', 'assets/js/desktop.js'],
         complete: function(){
            $(function(){
               // init app
               isMobile ? mobile.init() : desktop.init();   
            })        
         }  
      }]);
   </script>
</body>
</html>