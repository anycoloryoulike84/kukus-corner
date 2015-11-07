app.controller('shippingCtrl',['ngCart','$log','$http', '$scope', function (ngCart, $log,$http, $scope){
	console.log("shipping controller");
	
	 $http.get('data/countries.json')
     .success(function(data, status, headers, config,index) {
         $scope.chooseCountries = data.countries;
         $scope.selectedCountry = $scope.chooseCountries[index];
     });
	
    
	/*$scope.isFormInvalid = false;
	
		$scope.submitForm = function()
		{
			if ($scope.userForm.username.$valid && $scope.userForm.psswrd.$valid)
				{
					alert("i m working fine");
				}
			else
				{
					$scope.isFormInvalid = true;
				}
		};*/
		
	      $scope.master = {};

	      $scope.update = function(user) {
	        $scope.master = angular.copy(user);
	      };

	      $scope.reset = function() {
	        $scope.user = angular.copy($scope.master);
	      };
	      
	      $scope.alert_me=function(){
	    	  console.log("I am clicked");
	      };
	      $scope.reset();
	      
	      
	      
	      //	------------- paypal--------------
	      
	      $scope.httpSettings = {
	              url:'/shipping'
	          };

	          $scope.payPalSettings ={ paypal:{
	              business:'svidyarthi@drishticon.com',
	              item_name:'Order',
	              item_number:'item_number',
	              currency_code:'USD'
	          }};

	          $scope.showCart = function(){

	              $log.info ('---Total Cost:---');
	              $log.info (ngCart.totalCost());
	              $log.info ('---Items in Cart:---');
	              $log.info (ngCart.getItems());

	          };
}]);