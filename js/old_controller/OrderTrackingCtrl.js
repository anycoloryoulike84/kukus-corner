KukusCorner.controller("OrderTrackingCtrl", function($scope, $http) {
    var baseUrl=window.location.origin;
    var base = window.location.protocol;
    var url = window.location.host;

    if (!baseUrl) {
        baseUrl = base + "//" + url;
    }
    var basePathName=window.location.pathname;
    var kukusCornerUrl=baseUrl + basePathName;

    var orderRestUrl='REST/retreiveOrder';

    $scope.trackOrder = function() {
        if(document.orderForm.orderId.value == ""||isNaN(document.orderForm.orderId.value)){
            alert("please enter proper order number!");
        }

        sessionStorage.logged = "true";
        var orderPost={orderId:$scope.order.orderId};
        console.log(orderPost);

        $http.post(kukusCornerUrl + orderRestUrl, orderPost).success(function(data, status) {
          if(200==status){
            $scope.orderTracking = angular.fromJson(data);
              console.log(data);
             document.getElementById("orderTracingResults").style.display = "block";
          }
        }).error(function(data, status, headers, config) {
            if(500==status){
                window.alert(data);
            }
        });
    };
});