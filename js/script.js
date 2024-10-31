// WOW ANIMATIONS
new WOW().init();

window.addEventListener("load", function () {
	// LOADER
	//document.querySelector("#loader").style.display = "none";
	document.querySelector("body").classList.add("show");

	// NAVBAR
	const navBtn = document.querySelector(".btn-navbar");

	if (navBtn) {
		const navBtnChilds = navBtn.querySelectorAll(".bars");

		// LOCAL STORAGE FOR TOGGLE NAVBAR
		if (localStorage.getItem("navbarOpen") == "true") {
			toggleNavbarClasses(navBtn, navBtnChilds);
			openPanel(navBtn);
		}
		navBtn.addEventListener("click", function () {
			if (localStorage.getItem("navbarOpen") == "true") {
				localStorage.setItem("navbarOpen", "false");
			} else {
				localStorage.setItem("navbarOpen", "true");
			}
			toggleNavbarClasses(this, navBtnChilds);
			openPanel(this);
		});
	}

	// PORTFOLIO ACCORDION
	const acc = document.getElementsByClassName("panel-heading");
	let i;
	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			openPanel(this);
			this.querySelector("i").classList.toggle("fa-angle-down");
			this.querySelector("i").classList.toggle("fa-angle-up");
		});
	}

	// ON RESIZE
	window.addEventListener("resize", function () {
		let resizeTimer;
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(handleResize(navBtn, acc), 250);
	});
});

//
// FUNCTIONS
//

// TOGGLE NAVBAR
function toggleNavbarClasses(el, childs) {
	el.classList.toggle("active");
	childs.forEach((element) => {
		element.classList.toggle("closeMenu");
	});
}

// OPEN PANEL OF NAVABAR AND ACCORDION
function openPanel(el) {
	let nextEl = el.nextElementSibling;
	let parentEl = el.closest(".panel");

	if (nextEl.style.maxHeight) {
		nextEl.style.maxHeight = null;
	} else {
		nextEl.style.maxHeight = nextEl.scrollHeight + "px";
	}
	if (parentEl) {
		parentEl.classList.toggle("panel-open");
	}
}

function handleResize(navBtn, acc) {
	if (navBtn.classList.contains("active")) {
		navBtn.nextElementSibling.style.maxHeight = navBtn.nextElementSibling.scrollHeight + "px";
	}
	for (let i = 0; i < acc.length; i++) {
		if (acc[i].closest(".panel").classList.contains("panel-open")) {
			openPanel(acc[i]);
			acc[i].querySelector("i").classList.toggle("fa-angle-down");
			acc[i].querySelector("i").classList.toggle("fa-angle-up");
		}
	}
}

// PROGRAMMING PAGE

if (window.location.href.indexOf("programming") != -1) {
	//
	//
	//
	// Scrivi un programma che stampa "Hello, World!"
	const stamp = "Hello, World!";
	console.log(`Exercise 1: ${stamp}`);

	// Scrivi una funzione che prende due numeri come input e restituisce la loro somma
	function sum(a, b) {
		const sum = a + b;
		console.log(`Exercise 2: ${sum}`);
	}
	sum(1, 2);

	// Scrivi un programma che determina se un numero è pari o dispari
	function oddOrEven(number) {
		number % 2 === 0 ? console.log(`Exercise 3: Is even`) : console.log(`Exercise 3: Is odd`);
	}
	oddOrEven(12);

	// Scrivi una funzione che prende tre numeri come input e restituisce il numero più grande tra i tre
	function bigger(number1, number2, number3) {
		let biggestNumber = number1;
		biggestNumber > number2 ? (biggestNumber = biggestNumber) : (biggestNumber = number2);
		biggestNumber > number3 ? (biggestNumber = biggestNumber) : (biggestNumber = number3);
		return biggestNumber;
	}
	const resultB = bigger(12, 2, 20);
	console.log(`Exercise 4: Th bigger number is ${resultB}`);

	// Scrivi una funzione che calcola il fattoriale di un numero
	function fattoriale(n) {
		let total = 1;
		for (let i = 1; i <= n; i++) {
			total *= i;
		}
		return total;
	}
	const numberF = 5;
	const resultF = fattoriale(numberF);
	console.log(`Exercise 5: Il fattoriale di ${numberF} è ${resultF}`);

	// Scrivi una funzione che genera la serie di Fibonacci fino a n numeri
	function fibonacci(n) {
		if (n <= 0) return [];
		if (n === 1) return [0];
		if (n === 2) return [0, 1];

		const fibonacciArray = [0, 1];
		for (let i = 2; i < n; i++) {
			const sum = fibonacciArray[fibonacciArray.length - 2] + fibonacciArray[fibonacciArray.length - 1];

			fibonacciArray.push(sum);
		}
		return fibonacciArray;
	}
	const num = 6;
	const fibSeries = fibonacci(num);
	console.log(`Exercise 6: La serie di Fibonacci per i primi ${num} numeri è: ${fibSeries}`);

	// Scrivi una funzione che verifica se una stringa è un palindromo
	function isPalindrome(str) {
		const strNoSpaces = str.toLowerCase().split("").join("");
		const strNoSpacesInvert = strNoSpaces.split("").reverse().join("");
		return strNoSpaces === strNoSpacesInvert;
	}
	const word = "ra da  r";
	const result = isPalindrome(word);
	console.log(`Exercise 7: La parola "${word}" è un palindromo? ${result}`);
	//
	//
	//
}
