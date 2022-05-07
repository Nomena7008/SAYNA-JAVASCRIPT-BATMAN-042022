   // Animation header
   $(document).ready(function() {
       $(".box").animate({
               left: "40%"
           },
           "slow");
   });
   // Animation title
   $(document).ready(function() {
       $(".title").animate({
               left: "17%"
           },
           "slow");
   });
   // SCROLL
   $(document).ready(function() {
       $(window).scroll(function() {
           let scroll = $(window).scrollTop();
           $('.boutton').css(
               "top", scroll, "px"
           )
       })
   })