// WOW ANIMATIONS
new WOW().init();

window.addEventListener('load', function () {

	// LOADER
	//document.querySelector("#loader").style.display = "none";
	document.querySelector("body").classList.add("show");

	// NAVBAR
	const navBtn = document.querySelector(".btn-navbar");
	const navBtnChilds = navBtn.querySelectorAll(".bars");

	// LOCAL STORAGE FOR TOGGLE NAVBAR
	if(localStorage.getItem("navbarOpen") == "true"){
		toggleNavbarClasses(navBtn, navBtnChilds);
		openPanel(navBtn);
	}
	navBtn.addEventListener("click", function() {
		if(localStorage.getItem("navbarOpen") == "true") {
			localStorage.setItem("navbarOpen", "false");
		} else {
			localStorage.setItem("navbarOpen", "true");
		}
		toggleNavbarClasses(this, navBtnChilds);
		openPanel(this);
	});

	// PORTFOLIO ACCORDION
	const acc = document.getElementsByClassName("panel-heading");
	let i;
	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			openPanel(this);
			this.querySelector("i").classList.toggle("fa-angle-down");
			this.querySelector("i").classList.toggle("fa-angle-up");
		});
	}

	// ON RESIZE
	window.addEventListener('resize', function() {
		clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResize, 250);
	});
});

//
// FUNCTIONS
//

// TOGGLE NAVBAR
function toggleNavbarClasses(el, childs) {
	el.classList.toggle("active");
	childs.forEach(element => {
		element.classList.toggle("closeMenu");
	});
}

// OPEN PANEL OF NAVABAR AND ACCORDION
function openPanel(el){
	let nextEl = el.nextElementSibling;
	let parentEl = el.closest(".panel");

	if (nextEl.style.maxHeight) {
		nextEl.style.maxHeight = null;
	} else {
		nextEl.style.maxHeight = nextEl.scrollHeight + "px";
	}
	if(parentEl){
		parentEl.classList.toggle("panel-open");
	}
}

function handleResize(){
	openPanel(navBtn);
	for (let i = 0; i < acc.length; i++) {
		if (acc[i].closest(".panel").classList.contains('open')) {
			openPanel(acc[i]);
		}
	}
}