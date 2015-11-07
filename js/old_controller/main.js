var KukusCorner = angular.module("KukusCorner", ['ngCookies']);

KukusCorner.config(['$httpProvider', function ($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
    $httpProvider.defaults.headers.get['Content-Type'] = 'application/json; charset=utf-8';
    $httpProvider.defaults.headers.post['Access-Control-Max-Age'] = '1728000';
    $httpProvider.defaults.headers.common['Access-Control-Max-Age'] = '1728000';
    $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
    $httpProvider.defaults.useXDomain = true;
}]);

KukusCorner.config(function ($routeProvider, $locationProvider) {

	$routeProvider

		//Catalog
		.when("/", {
			templateUrl: "html/home.html",
			controller: "HomeCtrl"
		})
        .when("/cakes", {
            templateUrl: "html/catalog/cakes.html",
            controller: "CakesCtrl"
        })
        .when("/flowers", {
            templateUrl: "html/catalog/flowers.html",
            controller: "FlowersCtrl"
        })
        .when("/chocolates", {
            templateUrl: "html/catalog/chocolates.html",
            controller: "ChocolatesCtrl"
        })
        .when("/toys", {
            templateUrl: "html/catalog/toys.html",
            controller: "ToysCtrl"
        })

        //Registration and login
		.when("/login", {
			templateUrl: "html/login.html",
			controller: "LoginCtrl"
		})
		.when("/signUp", {
			templateUrl: "html/signUp.html",
			controller: "SignUpCtrl"
		})
        .when("/passwordRecovery", {
            templateUrl: "html/passwordRecovery.html",
            controller: "PasswordRecoveryCtrl"
        })
        .when("/emailConfirmation", {
            templateUrl: "html/emailConfirmation.html",
            controller: "EmailConfirmationCtrl"
        })

		//User
		.when("/user/main", {
			templateUrl: "html/user/index.html",
			controller: "UserCtrl"
		})
		.when("/user/generalInformation", {
			templateUrl: "html/user/generalInformation.html",
			controller: "UserGeneralInformationCtrl"
		})
		.when("/user/shippingInformation", {
			templateUrl: "html/user/shippingInformation.html",
			controller: "UserShippingInformationCtrl"
		})
		.when("/user/changePassword", {
			templateUrl: "html/user/changePassword.html",
			controller: "UserChangePasswordCtrl"
		})
		.when("/cart", {
			templateUrl: "html/cart.html",
			controller: "UserCartCtrl"
		})
		.when("/user/ordersHistory", {
			templateUrl: "html/user/ordersHistory.html",
			controller: "UserOrdersHistoryCtrl"
		})

		//Checkout
		.when("/checkout/shippingAddress", {
			templateUrl: "html/checkout/shippingAddress.html",
			controller: "CheckoutShippingAdressCtrl"
		})

        //Static stuff
        .when("/static/privacy", {
            templateUrl: "html/static/privacy.html"
        })
        .when("/static/delivery", {
            templateUrl: "html/static/delivery.html"
        })
        .when("/static/refund", {
            templateUrl: "html/static/refund.html"
        })
        .when("/static/terms", {
            templateUrl: "html/static/terms.html"
        })
        .when("/static/about", {
            templateUrl: "html/static/about.html"
        })
        .when("/static/contact", {
            templateUrl: "html/static/contact.html"
        })
        .when("/static/help", {
            templateUrl: "html/static/help.html"
        })

        //Order Tracking
        .when("/orderTracking", {
            templateUrl: "html/orderTracking.html",
            controller: "OrderTrackingCtrl"
        })

		//Otherwise
		.otherwise({
			templateUrl: "html/404.html"
		});

	$locationProvider
		.html5Mode(false);
});

KukusCorner.controller("RootCtrl", function($scope, $cookieStore, $http, $rootScope) {

	sessionStorage.logged = "false";
	$rootScope.popUpMessage = "";
	$rootScope.productsInCart = 0;

	$scope.sortCatalog = {
		sortBy: "price",
		reverse: true,
		category: sessionStorage.category
	};

	$http.get("data/catalog.json").success(function(data) {
		$scope.catalog = data.categories; 
	});

	$http.get("data/products.json").success(function(data) {
		$scope.products = data.products;
	});

//    $http({method: 'GET', url: 'http://localhost:8080/EcommerceApp/REST/products/Flowers'}).
//        success(function(data, status, headers, config) {
//            console.log(data);
//            console.log(status);
//            console.log(headers);
//            console.log(config);
//        }).
//        error(function(data, status, headers, config) {
//            console.log(data);
//            console.log(status);
//            console.log(headers);
//            console.log(config);
//        });

//	$http.get("data/user.json").success(function(data) {
//		$scope.user = data;
//		$rootScope.productsInCart = $scope.user.cart.length;
//	});

	$scope.showPopUp = function() {
		var popUp = document.getElementById("popUp");
		popUp.style.height = "90px";
	};

	$scope.hidePopUp = function() {
		var popUp = document.getElementById("popUp");
		popUp.style.height = "0px";
	};

    $scope.profileDisplay = function() {
        if (sessionStorage.logged == "false") {
            document.getElementById("profileLogIn").style.display = "block";
            document.getElementById("profileUser").style.display = "none";
        } else if (sessionStorage.logged == "true") {
            document.getElementById("profileLogIn").style.display = "none";
            document.getElementById("profileUser").style.display = "block";
        }
    };
   // $scope.profileDisplay();
});

KukusCorner.controller('CatalogCtrl', function($scope, $location, $cookieStore, $rootScope) {
	$scope.mobileSearch = function() {
		var mobileSearchDiv = document.getElementById("options");
		if (window.getComputedStyle(mobileSearchDiv).display === "none") {
			mobileSearchDiv.style.display = "block";
		} else {
			mobileSearchDiv.style.display = "none";
		};
	};

	$scope.sortCatalogByCategory = function(text) {
		$scope.sortCatalog.category = text;
	};

	$scope.addProductToCart = function(id) {
		var duplicate = false;
		var i = 0;
		for (i = 0; i < $scope.user.cart.length; i++) {
			if ($scope.user.cart[i].id == id) {
				duplicate = true;
			};
		};
		if (duplicate === true) {
			$rootScope.popUpMessage = "You already have this product in a cart";
			$scope.showPopUp();
		} else if (duplicate === false) {
			$rootScope.productsInCart += 1;
			$scope.user.cart.push($scope.products[id]);
			$rootScope.popUpMessage = "Product has been added to cart";
			$scope.showPopUp();
		};
	};
});


KukusCorner.controller("LoginCtrl", function($scope, $location) {
	$scope.login = function() {
        sessionStorage.logged = "true";
        $scope.profileDisplay();
		$location.path("user/main");
	};
});

KukusCorner.controller("SignUpCtrl", function($scope, $rootScope) {
    $scope.newUser = function() {
        $rootScope.popUpMessage = "Thank you for registration, we sent you an email, please verify it";
        $scope.showPopUp();
    };
});

KukusCorner.controller("UserCtrl", function($scope, $location) {
    $scope.logOut = function() {
        sessionStorage.logged = "false";
        $scope.profileDisplay();
        $location.path("/");
    };
});

KukusCorner.controller("UserGeneralInformationCtrl", function($scope, $location) {
	$scope.editGeneralInformation = function() {
		var fields = document.querySelectorAll("form input[type='text'], form input[type='email']");
		for (var i = 0; i < fields.length; i++) {
			fields[i].classList.remove("readonlyInput");
			fields[i].removeAttribute("readonly");
		}
		var submitButton = document.querySelector("form input[type='submit']");
		submitButton.style.display = "block";
	};

	$scope.saveGeneralInformation = function() {
		$location.path("user/main");
	};
});

KukusCorner.controller("UserShippingInformationCtrl", function($scope, $location) {
	$scope.editShippingInformation = function() {
		var fields = document.querySelectorAll(".userDetails form input[type='text'], .userDetails form input[type='tel'], .userDetails form input[type='number']");
		for (var i = 0; i < fields.length; i++) {
			fields[i].classList.remove("readonlyInput");
			fields[i].removeAttribute("readonly");
		}
		var submitButton = document.querySelector(".userDetails form input[type='submit']");
		submitButton.style.display = "block";
	};

	$scope.saveShippingInformation = function() {
		$location.path("user/main");
	};
});

KukusCorner.controller("UserChangePasswordCtrl", function($scope, $location) {
	var submitButton = document.querySelector(".userDetails form input[type='submit']");
	submitButton.style.display = "block";

	$scope.saveNewPassword = function() {
		$location.path("user/main");
	};
});

KukusCorner.controller("UserCartCtrl", function($scope, $location, $rootScope) {

	$scope.returnBack = function() {
		window.history.back();
	};

	$scope.removeFromCart = function(index) {
		$rootScope.productsInCart -= 1;
		$scope.user.cart.splice(index,1);
	};

	$scope.proceedToCheckout = function() {
		if (sessionStorage.logged === "false") {
			$rootScope.popUpMessage = "You need to Sing In to procced to checkout";
			$scope.showPopUp();
		} else if (sessionStorage.logged === "true") {
		 	$location.path("checkout/shippingAddress");
		};
	};
});

KukusCorner.controller("UserOrdersHistoryCtrl", function($scope, $location) {

	$scope.returnBack = function() {
		$location.path("user/main");
	};
});

KukusCorner.controller("CheckoutShippingAddressCtrl", function($scope, $location) {

});

KukusCorner.controller("OrderTrackingCtrl", function($scope, $http) {

    $scope.trackOrder = function() {
        $http.get("data/orderTracking.json").success(function(data) {
            $scope.orderTracking = data;
            document.getElementById("orderTracingResults").style.display = "block";
        });
    };
});

KukusCorner.controller("PasswordRecoveryCtrl", function($scope, $location, $rootScope) {
    $scope.newPassword = function() {
        $rootScope.popUpMessage = "Temporary password was send to your email";
        $scope.showPopUp();
    };
});

KukusCorner.controller("EmailConfirmationCtrl", function($scope, $location) {

});