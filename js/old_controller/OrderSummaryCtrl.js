KukusCorner.controller("OrderSummaryCtrl", function($scope,$rootScope, $location, $http) {
    var baseUrl=window.location.origin;
    var base = window.location.protocol;
    var url = window.location.host;

    if (!baseUrl) {
        baseUrl = base + "//" + url;
    }
    var basePathName=window.location.pathname;
    var kukusCornerUrl=baseUrl + basePathName;

    var checkoutRestUrl='REST/checkout';

// function orderSummary(email) { this.email=email; }


    var orderSummaryPost = new Object();
             orderSummaryPost.email=sessionStorage.email8H5f3dFg;

            console.log(orderSummaryPost);

    $http.post(kukusCornerUrl + checkoutRestUrl, orderSummaryPost).success(function(data){
        $scope.orderItems=data;
    });


    $scope.backToShippingAddress = function() {
              window.history.back();
    };

    $scope.nextToCardInfo = function() {
        $location.path("/checkout/creditCardInfo");
    };
    $scope.changeShippingAddress = function() {
        //$rootScope.flag=1;
        $location.path("/checkout/shippingAddress");
    };

    $scope.onClick = function () {
        window.print();
        return false;
    };
});
