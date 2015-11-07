KukusCorner.controller("PasswordRecoveryCtrl", function($scope, $location, $rootScope, $http) {

    var baseUrl=window.location.origin;
    var base = window.location.protocol;
    var url = window.location.host;

    if (!baseUrl) {
        baseUrl = base + "//" + url;
    }
    var basePathName=window.location.pathname;
    var kukusCornerUrl=baseUrl + basePathName;

    var passwordRestUrl='REST/resetPassword';

    $scope.newPassword = function() {

        var emailPost=new Object();
            emailPost.emailReset=$scope.customer.emailOne;

            console.log(emailPost);
        $http.post(kukusCornerUrl + passwordRestUrl,emailPost).
            success(function(data) {             
                $rootScope.popUpMessage = "Temporary password was send to your email";
                $scope.showPopUp();
            });
    };
});