'use strict';

angular.module("simpleRestJsonSap")
.controller("HomeCtrl", ["$scope","Offers", function ($scope, Offers) {
	Offers.get((res) => {
		$scope.offers = res && res.offers ? res.offers : [];
	});
}]);