
var app = angular.module('KukusCorner', ['ngRoute','ngCart','ngAnimate', 'ui.bootstrap']);

app.config(['$httpProvider', function ($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
    $httpProvider.defaults.headers.post['Access-Control-Max-Age'] = '1728000';
    $httpProvider.defaults.headers.common['Access-Control-Max-Age'] = '1728000';
    $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
    $httpProvider.defaults.useXDomain = true;
}]);

app.config(['$routeProvider',
            function($routeProvider){
	
		$routeProvider.
		when('/home',{
			templateUrl:'./html/homepage.html',
			controller : 'homeCtrl'	
		});
        $routeProvider.
        when('/cake', {
            templateUrl:'./html/catalog/cake.html',
            controller : 'productCakeCtrl'  
        });
        $routeProvider.
        when('/flowers', {
            templateUrl:'./html/catalog/flowers.html',
            controller : 'productFlowerCtrl'  
        });      
        $routeProvider.
        when('/chocolates', {
            templateUrl:'./html/catalog/chocolates.html',
            controller : 'productChocoCtrl'  
        });         
        $routeProvider.
        when('/toys', {
            templateUrl:'./html/catalog/toys.html',
            controller : 'productToyCtrl'  
        });
		$routeProvider.
        when('/gifts', {
            templateUrl:'./html/catalog/gifts.html',
            controller : 'specialGifts'  
        });        
        $routeProvider.
        when('/product_details', {
            templateUrl:'./html/product_details.html',
            controller : 'productDetails' 
        });
        $routeProvider.
		when('/login',{  
			templateUrl:'./html/checkout/login.html',
			controller : 'loginCtrl'	
		});
        $routeProvider.
		when('/signup',{  
			templateUrl:'./html/checkout/signup.html',
			controller : 'loginCtrl'	
		});
		$routeProvider.
		when('/productInfo/:productID',{  
			templateUrl:'./html/productInfo.html',
			controller : 'productInfo'	
		});
		 $routeProvider.
			when('/shipping',{  
				templateUrl:'./html/checkout/shipping.html',
				controller : 'shippingCtrl'	
			});
         $routeProvider.
	        when('/cart', {
	            templateUrl:'./html/cart.html',
	            controller : 'cartCtrl' 
	        });
         $routeProvider.
	        when('/aboutus', {
	            templateUrl:'./html/static-webpages/aboutus.html',
	            controller : '' 
	        });
         $routeProvider.
			when('/track-order',{  
				templateUrl:'./html/checkout/trackOrder.html',
				controller : 'trackOrderCtrl'	
			}); 
         $routeProvider.
	        when('/deliveryInfo', {
	            templateUrl:'./html/static-webpages/deliveryInfo.html',
	            controller : '' 
	    	}); 
         $routeProvider.
	        when('/terms', {
	            templateUrl:'./html/static-webpages/terms.html',
	            controller : '' 
	    	});
         $routeProvider.
	        when('/returns', {
	            templateUrl:'./html/static-webpages/returns.html',
	            controller : '' 
	    	});
         $routeProvider.
	        when('/contactus', {
	            templateUrl:'./html/static-webpages/contact-us.html',
	            controller : '' 
	    	});
         $routeProvider.
	        when('/placeorder', {
	            templateUrl:'./html/checkout/place_order.html',
	            controller : 'placeorderCtrl'
	    	});
	      $routeProvider.
	        when('/paymentOptions', {
	            templateUrl:'./html/static-webpages/payment-options.html',
	            controller : '' 
	    	});
	      $routeProvider.
		    when('/shippingOptions', {
		        templateUrl:'./html/static-webpages/shipping-options.html',
		        controller : '' 
			});
		  $routeProvider.
		    when('/faq', {
		        templateUrl:'./html/static-webpages/faq.html',
		        controller : '' 
		  	});
	      $routeProvider.
		     when('/help', {
		         templateUrl:'./html/static-webpages/privacy.html',
		         controller : '' 
		     });
	      $routeProvider.
		     when('/search-product/:searchParameter', {
		         templateUrl:'./html/searchCatelog.html',
		         controller : 'searchCatelogCtrl' 
		     })
         
        
        .otherwise({
			redirectTo:'/home'
		});
}]);

	


