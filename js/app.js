/* Main AngularJS Web Application */
var app = angular.module('WebApp', ['ui.bootstrap', 'ui.router', 'angular-loading-bar', 'ngAnimate', 'html5.placeholder']);



/* Configure the Routes */
app.config(function($locationProvider, $stateProvider, $urlRouterProvider, cfpLoadingBarProvider) {
	
	$urlRouterProvider.otherwise("/home");
  
	$stateProvider
		.state('home', {
			url: "/home",
			templateUrl: "partials/home.html",
			//controller: "homeController",
			containerClass: "red"
		})
		.state('about', {
			url: "/about",
			templateUrl: "partials/about.html",
			//controller: "aboutController",
			containerClass: "green"
		})
		.state('work', {
			url: "/work",
			templateUrl: "partials/work.html",
			//controller: "faqController",
			containerClass: "yellow"
		})
		.state('contact', {
			url: "/contact",
			templateUrl: "partials/contact.html",
			//controller: "contactController",
			containerClass: "light-blue"
		});
	
    // enable html5Mode for pushstate ('#'-less URLs)
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
	
});



/* Run -> change class and scrollTop */
app.run(function($rootScope, $location){
    $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
        $rootScope.containerClass = toState.containerClass;
		document.body.scrollTop = document.documentElement.scrollTop = 0;
		/*wow = new WOW({mobile: false,})
		wow.init();*/
		//new WOW().init();
    });

});



/* Controls the WOW Js ...for old Safari 5.1 < */
app.controller('WowCtrl', function ($scope) {
	new WOW().init();
});



/* Controls the LoadingBar */
app.controller('LoadingBar', function ($scope, $timeout, cfpLoadingBar) {    

	$scope.start = function() {
      cfpLoadingBar.start();
    };

    $scope.complete = function () {
      cfpLoadingBar.complete();
    }
    $scope.start();
    $timeout(function() {
      $scope.complete();
    }, 750);
	
});



/* Controls the Menu */
app.controller('NavBarCtrl', function ($scope, $location) {
	$scope.isCollapsed = true;
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});



/* Controls the AccordionCtrl in Work page */
app.controller('AccordionCtrl', function ($scope, $location) {
	//$scope.oneAtATime = true;
	$scope.status = {
    	isFirstOpen: true,
    	isFirstDisabled: false
    };
});