KukusCorner.controller("UserCartCtrl", function ($scope, $location, $rootScope, $http) {
    var baseUrl = window.location.origin;
    var base = window.location.protocol;
    var url = window.location.host;

    if (!baseUrl) {
        baseUrl = base + "//" + url;
    }
    var basePathName = window.location.pathname;
    var kukusCornerUrl = baseUrl + basePathName;

    var getShoppingRestUrl = 'REST/cartService/getShoppingCart';
    var deleteItemUrl = 'REST/cartService/deleteItem';
    var updateItemUrl = 'REST/cartService/updateItem';

    var cartEmailPost = new Object();
    cartEmailPost.email = sessionStorage.email8H5f3dFg;

    $http.post(kukusCornerUrl + getShoppingRestUrl, cartEmailPost).success(function (data) {
        $rootScope.shoppingCart = data;

    });

    $scope.returnBack = function () {
        window.history.back();
    };

    $scope.removeFromCart = function (id, index) {
//        console.log(id);
//        console.log(index);

        var removeCartPost = new Object();
        removeCartPost.productId = id;
        removeCartPost.email = sessionStorage.email8H5f3dFg;

//        console.log(removeCartPost);

        $http.post(kukusCornerUrl + deleteItemUrl, removeCartPost).success(function (data) {
            $rootScope.productsInCart -= 1;
            $scope.shoppingCart.splice(index, 1);
        });


    };

//    document.getElementById('qty').style.display="none";
//    if (document.getElementById('updateInput').onkeyup()){
//        document.getElementById('qty').style.display="block";
//    }

    $scope.updateFromCart = function (id, qty) {
//       console.log(qty);
//        console.log(id);

        var updateCartPost = new Object();
        updateCartPost.productId = id;
        updateCartPost.quantity = qty;
        updateCartPost.email = sessionStorage.email8H5f3dFg;

//        console.log(updateCartPost);

        $http.post(kukusCornerUrl + updateItemUrl, updateCartPost).success(function (data) {
//            $rootScope.popUpMessage = "Thank you !! ,shopping cart is updated proceed to checkout";
//            $scope.showPopUp();
        });
    };

    $scope.proceedToCheckout = function () {
        if (sessionStorage.logged === "false") {
            $location.path("checkout/guestCheckout");
        } else if (sessionStorage.logged === "true") {
            $location.path("checkout/shippingAddress");
        }
    };

    //document.getElementById('qty').style.display='none';

    // I toggle the value of isVisible.
    $scope.toggle = function () {
        $scope.isVisible = true;
    };
// Default the blocks to be visible.
    $scope.isVisible = false;
});

