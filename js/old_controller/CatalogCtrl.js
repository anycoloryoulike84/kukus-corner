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
            $rootScope.popUpMessage = "Product has beed added to cart";
            $scope.showPopUp();
        };
    };
});