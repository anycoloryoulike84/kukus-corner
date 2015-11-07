app.controller("trackOrderCtrl", function($scope, $http) {
    var baseUrl=window.location.origin;
    var base = window.location.protocol;
    var url = window.location.host;

    if (!baseUrl) {
        baseUrl = base + "//" + url;
    }

    $scope.trackOrder = function() {
    	
  	  $http.get('data/trackOrder.json').success(function(data, status, headers, config) {	    	
  		$scope.orderTracking = data;
  		
  	 });
    };
});