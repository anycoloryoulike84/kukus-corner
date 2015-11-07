app.controller('loginCtrl', ['$http', '$scope', function ($http, $scope){
    var baseUrl = window.location.origin;
    var base = window.location.protocol;
    var url = window.location.host;

    if (!baseUrl) {
        baseUrl = base + "//" + url;
    }
    var basePathName = window.location.pathname;
    var kukusCornerUrl = baseUrl + basePathName;

    var loginRestUrl = 'REST/login/getCustomer';
    
    $scope.login = function () {
        //sessionStorage.logged = "true";
        var userPost = new Object();
        userPost.email = $scope.user.email;
        //sessionStorage.email8H5f3dFg = $scope.user.email;
        // console.log(sessionStorage.email8H5f3dFg);
        userPost.password = $scope.user.password;
     
        /*$http({method: 'GET', url: 'http://rest-service.guides.spring.io/greeting', 
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
                'X-Random-Shit':'123123123'
            }})
        .success(function(d){
        	console.log( "yay" );
        	$scope.greeting = data;
        })
        .error(function(d){ console.log( "nope" ); });*/

        $http.post(kukusCornerUrl + loginRestUrl, userPost).
            success(function (data, status, headers, config) {
                if (200 == status) {
                    $rootScope.user = angular.fromJson(data);
//                    sessionStorage.usergfr45tew = $rootScope.user;
                    //$rootScope.profileDisplay();
                    console.log($rootScope.user);

                    function shoppingCartLength(email) {
                        this.email = email;
                    }

                    //var cartEmail = new shoppingCartLength(sessionStorage.email8H5f3dFg);

                    $http.post(kukusCornerUrl + shoppingRestUrl, cartEmail).success(function (data) {
                        $rootScope.userCart = angular.fromJson(data);
                        $rootScope.productsInCart = $rootScope.userCart.length;
                    });
                    $location.path("/content.html");
                }
            }).
            error(function (userCart, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                if (500 === status) {
                    //console.log(data);
                    // $scope.errormessage = data;
                    window.alert(userCart);
//                                    $rootScope.popUpMessage = "Invalid user name or password";
//                                    $scope.showPopUp();
                }
            });

    };
	console.log("login controller");
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

	      $scope.reset();
	     
	     
}]);