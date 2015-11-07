KukusCorner.controller("ThankYouCtrl", function($scope, $location, $rootScope, $http) {
    var baseUrl=window.location.origin;
    var base = window.location.protocol;
    var url = window.location.host;

    if (!baseUrl) {
        baseUrl = base + "//" + url;
    }
    var basePathName=window.location.pathname;
    var kukusCornerUrl=baseUrl + basePathName;

    var getShoppingRestUrl='REST/cartService/getShoppingCart';

    $scope.placedOrder=$rootScope.orderPlaced;

    function shoppingCartLength(email){this.email=email; }
    var cartEmail=new shoppingCartLength(sessionStorage.email8H5f3dFg);

    $http.post(kukusCornerUrl + getShoppingRestUrl, cartEmail).success(function(data) {
        $rootScope.userCart = data;
        $rootScope.productsInCart = $rootScope.userCart.length;
    });

    $scope.checkoutBack = function() {
        window.history.back();
    };
});