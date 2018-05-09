
jQuery(document).ready(function(){

  $(function() {
    $('.js-nav a, .js-connect').click(function(e) {
      e.preventDefault();
      $('body, html').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 750);
    });
  });


  var tl = new TimelineMax();
  var mySplitText = new SplitText("#quote", {type:"words,chars"});
  var chars = mySplitText.chars; //an array of all the divs that wrap each character

  TweenMax.set("#quote", {perspective:400});

  tl.staggerFrom(chars, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");



  document.getElementById("quote").onclick = function() {
    tl.restart();
  }

});
