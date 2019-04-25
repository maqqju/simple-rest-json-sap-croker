'use strict';

angular.module("simpleRestJsonSap")
.filter("usage", [function() {
	function UsageFilter(input) {
		if (input instanceof Array) {
			return "User has used " + input.map((u) => `${u.used}/${u.limit} of ${u.type}`).join(", ");
		} else {
			return "N/A"
		}
	}

	return UsageFilter;
}]);