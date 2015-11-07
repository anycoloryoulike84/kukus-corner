KukusCorner.controller("CheckoutGuestCheckoutCtrl", function($scope, $location) {
    $scope.checkoutSignIn = function() {
        $location.path("login");
    };

    $scope.checkoutSignUp = function() {
        $location.path("signUp");
    };

    $scope.checkoutGuest = function() {
        $location.path("checkout/shippingAddress");
    };

    $scope.checkoutBack = function() {
        window.history.back();
    };

});