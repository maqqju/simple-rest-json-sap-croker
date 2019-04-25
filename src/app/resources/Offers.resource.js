'use strict';

angular.module("melitaEndpoints").factory("Offers", ["$resource", "ApiConfig", 
	function($resource, API_CONFIG) {
		return $resource(`${API_CONFIG.BASE_URL}/offers`);
	}
]);