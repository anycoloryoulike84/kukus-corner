KukusCorner.controller("UserOrdersHistoryCtrl", function($scope, $location, $http, $rootScope) {
    var baseUrl=window.location.origin;
    var base = window.location.protocol;
    var url = window.location.host;

    if (!baseUrl) {
        baseUrl = base + "//" + url;
    }
    var basePathName=window.location.pathname;
    var kukusCornerUrl=baseUrl + basePathName;

    var getOrderRestUrl='REST/getOrder';

    $scope.loggedUser = $rootScope.user;

    var userEmailPost={email:sessionStorage.email8H5f3dFg};

    $http.post(kukusCornerUrl + getOrderRestUrl, userEmailPost).success(function(data){
        $scope.orderHistory=angular.fromJson(data);
        document.getElementById("orderHistoryResults").style.display = "block";
    });

});