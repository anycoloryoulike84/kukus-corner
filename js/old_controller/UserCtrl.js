KukusCorner.controller("UserCtrl", function($scope, $location) {
    $scope.logOut = function() {
        //sessionStorage.logged = "false";
        sessionStorage.email8H5f3dFg == null;
        $scope.profileDisplay();
       // sessionStorage.email8H5f3dFg=null;
        $location.path("/");
    };
});