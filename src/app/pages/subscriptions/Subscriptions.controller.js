'use strict';

angular.module("simpleRestJsonSap")
.controller("SubscriptionsCtrl", ["$scope","Subscriptions", "$routeParams", function ($scope, Subscriptions, $routeParams) {
	console.log("dahal hawn");
	Subscriptions.get({subscriptionId : $routeParams.subscriptionId}, (res) => {
		$scope.subscriptions = res && res.subscriptions ? res.subscriptions : [];
	});
}]);