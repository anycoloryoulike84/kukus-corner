app.controller('headerCtrl',[ '$http','ngCart', '$scope', function ($http, ngCart, $scope) {
	console.log("header controller");
	
	  ngCart.setShipping(10.99);
      ngCart.setTaxRate(13);


  $http.get('data/flatfile.json')
      .success(function(data, status, headers, config) {
          $scope.products = data;
      })
      .error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      });

	
}]);
	
app.directive('header', function() {
		  return {
		    templateUrl:'./html/header.html'
		  };
		});

