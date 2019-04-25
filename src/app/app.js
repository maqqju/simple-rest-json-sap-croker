'use strict';

angular.module('melitaEndpoints', [
	'ngResource',
	'ngRoute',
]).config([
	'$routeProvider', 
	'$locationProvider', 
	'$httpProvider',
	'$qProvider',

	($routeProvider, $locationProvider, $mdThemingProvider, $httpProvider, $qProvider) => {

	$routeProvider.when('/', {
		templateUrl : 'pages/home/home.html',
		controller : 'HomeCtrl'
	}).when('/subscriptions/:subscriptionId', {
		templateUrl : 'pages/subscriptions/subscriptions.html',
		controller : 'SubscriptionsCtrl'
	}).otherwise({
		redirectTo : '/'
	});
}]);