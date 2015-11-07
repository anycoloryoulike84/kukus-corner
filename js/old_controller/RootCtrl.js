KukusCorner.controller("RootCtrl", function ($scope, $cookieStore, $http, $rootScope) {
    if (sessionStorage.email8H5f3dFg == undefined) {
        sessionStorage.logged = "false";
    }
    $rootScope.popUpMessage = "";
    $rootScope.productsInCart = 0;

    $scope.sortCatalog = {
        sortBy: "price",
        reverse: true,
        category: sessionStorage.category
    };

    $scope.showPopUp = function () {
        var popUp = document.getElementById("popUp");
        popUp.style.height = "90px";
    };

    $scope.hidePopUp = function () {
        var popUp = document.getElementById("popUp");
        popUp.style.height = "0px";
    };

    $rootScope.profileDisplay = function () {
        if (sessionStorage.logged == "false") {
            document.getElementById("profileLogIn").style.display = "block";
            document.getElementById("profileUser").style.display = "none";
        } else if (sessionStorage.logged == "true") {
            document.getElementById("profileLogIn").style.display = "none";
            document.getElementById("profileUser").style.display = "block";
        }
    };
    $scope.profileDisplay();
});