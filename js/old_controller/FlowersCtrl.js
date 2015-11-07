KukusCorner.controller('FlowersCtrl', function ($scope, $location, $cookieStore, $rootScope, $http) {

    var baseUrl = window.location.origin;
    var base = window.location.protocol;
    var url = window.location.host;

    if (!baseUrl) {
        baseUrl = base + "//" + url;
    }
    var basePathName = window.location.pathname;
    var kukusCornerUrl = baseUrl + basePathName;

    var flowerRestUrl = 'REST/products/flowers';
    var cartRestUrl = 'REST/cartService';

    $http.get(kukusCornerUrl + flowerRestUrl).success(function (data) {
        $scope.flowers = data;
        //  console.log($scope.flowers);
    });

    $scope.mobileSearch = function () {
        var mobileSearchDiv = document.getElementById("options");
        if (window.getComputedStyle(mobileSearchDiv).display === "none") {
            mobileSearchDiv.style.display = "block";
        } else {
            mobileSearchDiv.style.display = "none";
        }
        ;
    };

    $scope.sortCatalogByCategory = function (text) {
        $scope.sortCatalog.category = text;
    };

    $scope.addProductToCart = function (id) {
        // console.log(id);

        var shoppingCartPost = {productId: id, quantity: 1, email: sessionStorage.email8H5f3dFg, date: "today"};

        // console.log(shoppingCartPost);

        $http.post(kukusCornerUrl + cartRestUrl, shoppingCartPost).success(function (data) {
            $rootScope.productsInCart += 1;
            $rootScope.flowerData = data;

        }).error(function (flowerData, status, headers, config) {
                if (500 === status) {
                    window.alert(flowerData);
                }
            });
    };
});