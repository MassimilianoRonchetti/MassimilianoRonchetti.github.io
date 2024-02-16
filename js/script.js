//const WebFont = require("webfontloader");
const brand = $("nav").find(".navbar-brand");
const back = $(".back");
let clientClass;

$(document).ready(function () {
	// SHOW <.NAVBAR-BRAND> WHEN DOCUMENT READY
	$(".navbar-brand").fadeIn(350);
});
$(window).on("load", function () {
	WebFont.load({
		google: {
			families: ["Poppins:100,200,300,400,500,600,700,800,900"],
		},
		active: function () {
			// SHOW <.NAVBAR-NAV> WHEN WINDOW LOAD
			$("nav").find(".navbar-nav").css("display", "flex").hide().delay(1000).fadeIn(350);

			// ANIMATE <.NAVBAR-BRAND> WHEN WINDOW LOAD
			brand.addClass("animate");

			// SHOW <BODY:before> WHEN WINDOW LOAD
			$("body").addClass("animate");

			// SHOW <[class*='line']> WHEN WINDOW LOAD
			$("nav").find("[class*='line']").css("display", "flex").hide().delay(1000).fadeIn(5000);

			// SHOW <.BG-IMAGE> ON <.NAV-ITEM> HOVER / CLICK FOR TOUCH DEVICES
			$("nav")
				.find(".nav-item")
				.each(function () {
					let el = $(this);

					// MOUSEOVER/MOUSEOUT EFFECT FOR CLICK / TOUCH DEVICES
					el.on("mouseover", function (e) {
						e.preventDefault();
						e.stopPropagation();
						mouseHover(el);
						if(el.is(brand)) {
							$("nav").find("[class*='line']").addClass("remove-opacity");
						}
					});
					// IF THE PRIMARY INPUT MECHANISM DON'T INCLUDES A POINTING DEVICE OF LIMITED ACCURACY, SUCH AS A FINGER ON A TOUCHSCREEN
					if(!window.matchMedia("(pointer: coarse)").matches) {
						el.on("mouseout", function (e) {
							e.preventDefault();
							e.stopPropagation();
							mouseOut(el);
							if(el.is(brand)) {
								$("nav").find("[class*='line']").removeClass("remove-opacity");
							}
						});
					}
					// CLICK <a> FOR OPEN PROJECT
					el.find("a").on("click", function (e) {
						e.preventDefault();
						e.stopPropagation();
						let thisProjectLink = $(this).data("title");
						//let thisProjectDocTitle = $(this).data("text");

						// ADD <.NO-EVENTS> CLASS FROM CLICKED LINK
						$(this).addClass("no-events");
						// ADD <.NO-EVENTS.HIDE> CLASS FROM CLICKED LINK
						$("nav").find(".nav-item:not(.go-to-section)").find("a").addClass("no-events hide");
						// ADD <.HIDE> CLASS TO LINES
						$("nav").find("[class*='line']").addClass("hide");
						// ADD <.MOVE-WIDTH> FROM <.DARK> & <.LIGHT>
						$(".light, .dark").toggleClass("move-width");

						// IF THE PRIMARY INPUT MECHANISM INCLUDES A POINTING DEVICE OF LIMITED ACCURACY, SUCH AS A FINGER ON A TOUCHSCREEN
						if(window.matchMedia("(pointer: coarse)").matches) {
							$("." + thisProjectLink + "-project")
								.delay(2700)
								.fadeIn(350);
						} else {
							$("." + thisProjectLink + "-project")
							.delay(700)
							.fadeIn(350);
						};

						// CLICK <.BACK> FOR CLOSE <.PROJECT>
						$("." + thisProjectLink + "-project").find(back).find("a").off('click');
						$("." + thisProjectLink + "-project").find(back).find("a").on("click", function (e) {
							e.preventDefault();
							e.stopPropagation();

							// REMOVE <.NO-EVENTS> CLASS FROM CLICKED LINK 
							$("nav").find(".nav-item.go-to-section").find("a").removeClass("no-events");
							// REMOVE <.NO-EVENTS.HIDE> CLASS FROM CLICKED LINK
							$("nav").find(".nav-item:not(.go-to-section)").find("a").removeClass("no-events hide");
							// REMOVE <.HIDE> CLASS TO LINES
							$("nav").find("[class*='line']").removeClass("hide");
							// REMOVE <.MOVE-WIDTH> FROM <.DARK> & <.LIGHT>
							$(this)
								.closest(".project")
								.fadeOut(350, function () {
									$(".light, .dark").toggleClass("move-width");
								});
							// 
							mouseOut(el);
							if(el.is(brand)) {
								$("nav").find("[class*='line']").removeClass("remove-opacity");
							}
							//window.history.back();
							//changeUrl("", thisProjectDocTitle);
						});

						//changeUrl(thisProjectLink, thisProjectDocTitle);
					});
				});
		},
	});
});

// SHOW <.BG-IMAGE> & ADD <.GO-TO-SECTION> & <.ANIMATE> CLASSES
function mouseHover(el) {
	clientClass = el.attr("class").split(" ");
	$(".bg-image." + clientClass[2])
		.stop()
		.fadeIn(350)
		.addClass("animate");
	el.addClass("go-to-section");
}

// HIDE <.BG-IMAGE> & REMOVE <.GO-TO-SECTION> & <.ANIMATE> CLASSES
function mouseOut(el) {
	clientClass = el.attr("class").split(" ");
	$(".bg-image." + clientClass[2])
		.stop()
		.fadeOut(350)
		.removeClass("animate");
	el.removeClass("go-to-section");
}

// CHANGE URL

// OLD WRONG
/* function changeUrl(url, docTitle) {
	let newUrl = "/ALTRO/text-website/" + url;
	window.history.pushState({ urlPath: newUrl }, null, newUrl);
	document.title = docTitle;
} */

// NEW CORRECT
/* function changeUrl(url, docTitle) {
	let newUrl = window.location.pathname + '/' + url;
	if(url == ""){
		window.history.back();
	} else {
		window.history.pushState({ urlPath: newUrl }, null, newUrl);
		document.title = docTitle;
	}
} */
/* function goBack() {
	window.history.back();
} */

// NEW TEST
/* $(window).on('popstate',function() {
	back.closest(".hm-project")
	.fadeOut(350, function () {
		$(".light, .dark").toggleClass("move-width");
	});
});
window.history.pushState */



/* const button = document.querySelector("button");
let state = { 
  buttonText: "Initial text"
};
// Change the look of your app based on state
function render() {
  button.innerText = state.buttonText;
}
// Set initial state and render app for the first time
(function initialize() {
  window.history.replaceState(state, null, "");
  render(state);
})();
// Update state, history, and user interface
function handleButtonClick() {
  state.buttonText = "I clicked the button!"
  window.history.pushState(state, null, "");
  render(state);
}
// Connect your button to the handler above to trigger on click
button.addEventListener("click", handleButtonClick);
// Tell your browser to give you old state and re-render on back
window.onpopstate = function (event) {
  if (event.state) { state = event.state; }
  render(state);
}; */