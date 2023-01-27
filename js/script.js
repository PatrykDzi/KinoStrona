var banner = document.getElementById("banner");
var images = banner.getElementsByTagName("img");
var current = 0;

setInterval(
  function() {
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
    current = (current + 1) % images.length;
    images[current].style.display = "block";
  }, 
  9000
);
/*
var isScrolling = false;

window.addEventListener("wheel", function(e) {
  if (!isScrolling) {
    isScrolling = true;
    if (e.deltaY < 0) {
      // scroll up
      window.scrollTo({
        top: window.scrollY - window.innerHeight,
        behavior: "smooth"
      });
    } else {
      // scroll down
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: "smooth"
      });
    }
    setTimeout(function() {
      isScrolling = false;
    }, 1000);
  }
});*/





/*
var isScrolling = false;

window.addEventListener("wheel", function(e) {
  if (!isScrolling) {
    isScrolling = true;
    if (e.deltaY < 0) {
      window.scrollBy(0, -window.innerHeight);
    } else {
      window.scrollBy(0, window.innerHeight);
    }
    setTimeout(function() {
      isScrolling = false;
    }, 1000);
  }
});*/

/*
window.addEventListener("wheel", function(e) {
  if (e.deltaY < 0) {
    window.scrollBy(0, -window.innerHeight);
  } else {
    window.scrollBy(0, window.innerHeight);
  }
});*/

/*
$(document).ready(function() {
  var currentScreen = 1;
  var totalScreens = $('.screen').length;
  $(document).on('mousewheel DOMMouseScroll', function(e) {
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      // scroll up
      if (currentScreen > 1) {
        currentScreen--;
        $('#content').animate({
          top: '+=' + $(window).height() + 'px'
        }, 'slow');
      }
    } else {
      // scroll down
      if (currentScreen < totalScreens) {
        currentScreen++;
        $('#content').animate({
          top: '-=' + $(window).height() + 'px'
        }, 'slow');
      }
    }
  });
});*/