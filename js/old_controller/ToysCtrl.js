KukusCorner.controller('ToysCtrl', function ($scope, $location, $cookieStore, $rootScope, $http) {

    var baseUrl = window.location.origin;
    var base = window.location.protocol;
    var url = window.location.host;

    if (!baseUrl) {
        baseUrl = base + "//" + url;
    }
    var basePathName = window.location.pathname;
    var kukusCornerUrl = baseUrl + basePathName;


    var toyRestUrl = 'REST/products/toys';
    var cartRestUrl = 'REST/cartService';

    $http.get(kukusCornerUrl + toyRestUrl).success(function (data) {
        $scope.toys = data;
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

        var shoppingCartPost = {productId: id, quantity: 1, email: sessionStorage.email8H5f3dFg, date: "today"};

        // console.log(shoppingCartPost);

        $http.post(kukusCornerUrl + cartRestUrl, shoppingCartPost).success(function (data) {
            $rootScope.productsInCart += 1;
            $rootScope.toyData = data;
        }).error(function (toyData, status, headers, config) {
                if (500 === status) {
                    window.alert(toyData);
                }
            });
    };

    $scope.bigImg = function () {
        $(document.getElementById('imm')).animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
    };
});