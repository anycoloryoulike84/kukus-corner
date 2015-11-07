

	  //CONTROLLER

	  app.controller('specialGifts', ['$scope','$http', 'ngCart', 'cakeService', function($scope, $http, ngCart, cakeService) {
		  
		  $scope.quantity1 = 1;
		  $scope.ngCart = ngCart;
		  
		  ngCart.setShipping(0.99);
	      ngCart.setTaxRate(13);
	  
		  
	  //GETTING IMAGES FROM JSON
	  
	  $http.get('data/datafile.json').success(function(data, status, headers, config) {		  
	    		$scope.productGifts = data.items.SpecialGifts;
	    		cakeService.setData($scope.productGifts);
	    	 });
	    
	}]);
	
	
	
		 