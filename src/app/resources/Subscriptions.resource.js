'use strict';

angular.module("melitaEndpoints").factory("Subscriptions", ["$resource", "ApiConfig", 
	function($resource, API_CONFIG) {
		return $resource(`${API_CONFIG.BASE_URL}/offers/:subscriptionId/subscriptions`, {subscriptionId : "@subscriptionId"});
	}
]);