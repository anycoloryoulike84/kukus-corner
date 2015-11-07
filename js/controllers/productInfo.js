app.controller('productInfo',['$scope', '$log', '$http','cakeService','$routeParams','ngCart', function($scope, $log, $http, cakeService, $routeParams, ngCart) {

	var index = $routeParams.productID;
    $scope.whichProduct = $routeParams.productID;
	$scope.productData = cakeService.getData();
	console.log("get data has: - " +$scope.whichProduct +"  product data "+$scope.productData);
	
    if ($scope.productData){	
		 //console.log("MEDIUM IMAGE");
		 console.log($scope.productData[index]);
	     $scope.modalShown = true;
	     $scope.lrgImageID = $scope.productData[index].id;
		 $scope.lrgImageURL = $scope.productData[index].image;
		 $scope.lrgImageName = $scope.productData[index].name;
		 $scope.lrgImagePrice = $scope.productData[index].price;
		 $scope.lrgImageDesc = $scope.productData[index].description; 
		 $scope.lrgImageIngredients = $scope.productData[index].ingredients;
		 $scope.lrgImageCalories = $scope.productData[index].nutrionalValue;
		 $scope.category = $scope.productData[index].category;
		 $scope.lrgImage = $scope.productData[index].image;
		 $scope.ImgId = $scope.productData[index].id;
		 console.log($scope.ImgId);
    }
	
   $scope.httpSettings = {
            url:'/checkout'
        };

        $scope.payPalSettings ={ paypal:{
            business:'svidyarthi@drishticon.com',
            item_name:'Order',
            item_number:'item_number',
            currency_code:'USD'
        }};

/*  	  //SETTING UP MEDIUM SIZE IMAGE ON CLICK OF IMAGE
   	$scope.setMediumImage = function(index, classes) {	    		  
		    if ($scope.productData){	
	    		 //console.log("MEDIUM IMAGE");
	    		 console.log($scope.product[whichProduct]);
	    	     $scope.modalShown = true;
	    		 $scope.lrgImageURL = $scope.productData[whichProduct].image;
	    		 $scope.lrgImageName = $scope.productData[whichProduct].name;
	    		 $scope.lrgImagePrice = $scope.productData[whichProduct].price;
	    		 $scope.lrgImageIngredients = $scope.productData[whichProduct].ingredients;
	    		 $scope.lrgImageCalories = $scope.productData[whichProduct].nutrionalValue;
	    		 $scope.category = $scope.productData[whichProduct].category;
	    		 $scope.lrgImage = $scope.productData[whichProduct].image;
	    		 $scope.ImgId = $scope.productData[whichProduct].id;
	 			 console.log($scope.ImgId);
		    }        	    		 
         };	*/ 
	
	/*$scope.ImgProductId = cakeService.getData();
	 console.log("my data:- " +cakeService.getData());
	*/
	/*$http.get('data/flatfile.json').success(function(data, status, headers,config){
	    $scope.product = data.items;
	});*/
	/*$rootScope.$on('productInfo', function(context, data) {
        console.log(data);
       // $scope.number++;
        $scope.productId1 = $scope.product[index].id;
        console.log($scope.productId1);
    });*/
	  
        	//================================ RATINGS ==============================
        
           	  $scope.rate = 4;
        	  $scope.max = 5;
        	  $scope.isReadonly = false;

        	  $scope.hoveringOver = function(value) {
        	    $scope.overStar = value;
        	    $scope.percent = 100 * (value / $scope.max);
        	  };

        	  $scope.ratingStates = [
        	    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'}
        	  ];
        
}]);

		 



