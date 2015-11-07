

	  //CONTROLLER

	  app.controller('productChocoCtrl', ['$scope','$http', 'ngCart', 'cakeService', function($scope, $http, ngCart, cakeService) {
		  
		  $scope.quantity1 = 1;
		  $scope.ngCart = ngCart;
		  
		  ngCart.setShipping(0.99);
	      ngCart.setTaxRate(13);
	  
	
		  
	  //GETTING IMAGES FROM JSON
	  
	  $http.get('data/datafile.json').success(function(data, status, headers, config) {		  
	    		$scope.productChocolates = data.items.Chocolates;
	    		cakeService.setData($scope.productChocolates);
	    	 });
	    
	}]);
	
	
	
		 