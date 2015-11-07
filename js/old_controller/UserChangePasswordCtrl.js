KukusCorner.controller("UserChangePasswordCtrl", function($scope, $location, $http) {
    var baseUrl=window.location.origin;
    var base = window.location.protocol;
    var url = window.location.host;

    if (!baseUrl) {
        baseUrl = base + "//" + url;
    }
    var basePathName=window.location.pathname;
    var kukusCornerUrl=baseUrl + basePathName;

    var updatePasswordUrl='REST/updatePassword';

    var submitButton = document.querySelector(".userDetails form input[type='submit']");
    submitButton.style.display = "block";

    $scope.saveNewPassword = function() {
        var userChangePassword=new Object();
                userChangePassword.email=$scope.user.email;
                userChangePassword.newPassword=$scope.user.newPassword;

        console.log(userChangePassword);

        $http.post(kukusCornerUrl + updatePasswordUrl, userChangePassword).
            success(function(data) {
//                $rootScope.user = data;
//                console.log($scope.user);
//                $scope.profileDisplay();
                $location.path("user/main");
            });

         };
});