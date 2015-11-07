KukusCorner.controller('ChocolatesCtrl', function ($scope, $location, $cookieStore, $rootScope, $http) {

    var baseUrl = window.location.origin;
    var base = window.location.protocol;
    var url = window.location.host;

    if (!baseUrl) {
        baseUrl = base + "//" + url;
    }
    var basePathName = window.location.pathname;
    var kukusCornerUrl = baseUrl + basePathName;

    var chocolateRestUrl = 'REST/products/chocolates';
    var cartRestUrl = 'REST/cartService';

    $http.get(kukusCornerUrl + chocolateRestUrl).success(function (data) {
        $scope.chocolates = data;
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

        var shoppingCartPost = {productId: id, quantity: 1, email: sessionStorage.email8H5f3dFg, date: "yesterday"};

        // console.log(shoppingCartPost);

        $http.post(kukusCornerUrl + cartRestUrl, shoppingCartPost).success(function (data) {
            $rootScope.productsInCart += 1;
            $rootScope.chocolateData = data;
        }).error(function (chocolateData, status, headers, config) {
                if (500 === status) {
                    window.alert(chocolateData);
                }
            });
    };
});