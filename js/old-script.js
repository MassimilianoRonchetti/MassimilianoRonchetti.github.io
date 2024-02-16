$(document).ready(function() {});

let clientClass;

$(window).on("load", function() {
  // SHOW .BG-IMAGE ON .NAV-ITEM HOVER
  $("nav")
    .find(".nav-item")
    .each(function() {
      let el = $(this);
      el.hover(
        function() {
          mouseHover(el);
        },
        function() {
          mouseOut(el);
        }
      );
      clickProjectLink(el);

      // EXAMPLE FOR HOVER EFFECT IN TOUCH DEVICES
      /*$(this).bind("touchstart", function(e) {
        e.preventDefault();
        mouseHover(el);
      });
      $(this).bind("touchend", function(e) {
        e.preventDefault();
        mouseOut(el);
        clickProjectLink(el);
      });*/
    });

  // SHOW .NAVBAR_NAV WHEN WINDOW LOAD
  $("nav")
    .find(".navbar-nav")
    .css("display", "flex")
    .hide()
    .delay(1000)
    .fadeIn(350);

  // ANIMATE .NAVBAR-BRAND WHEN WINDOW LOAD
  $("nav")
    .find(".navbar-brand")
    .addClass("animate");
});

// SHOW .BG-IMAGE
function mouseHover(el) {
  clientClass = el.attr("class").split(" ");
  $(".bg-image." + clientClass[2])
    .stop()
    .fadeIn(350)
    .addClass("animate");
}
// HIDE .BG-IMAGE
function mouseOut(el) {
  clientClass = el.attr("class").split(" ");
  $(".bg-image." + clientClass[2])
    .stop()
    .fadeOut(350)
    .removeClass("animate");
}
// CLICK .NAV-ITEM AND DO SLIDE EFFECT
function clickProjectLink(el) {
  el.find("a").on("click", function(e) {
    e.preventDefault();
    $(".light, .dark").toggleClass("move-width");
  });
}
