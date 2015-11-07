KukusCorner.controller("UserGeneralInformationCtrl", function ($scope, $location, $rootScope, $http) {
    var baseUrl = window.location.origin;
    var base = window.location.protocol;
    var url = window.location.host;

    if (!baseUrl) {
        baseUrl = base + "//" + url;
    }
    var basePathName = window.location.pathname;
    var kukusCornerUrl = baseUrl + basePathName;

    var updateProfileUrl = 'REST/updateProfile';

    //console.log(sessionStorage.email8H5f3dFg);

    $scope.loggedUser = $rootScope.user;

//    sessionStorage.fname898rtrg=$scope.loggedUser.fname;
//    sessionStorage.lname837334yt=$scope.loggedUser.lname;
//
//    if(document.form.fname.value == ''){
//        $scope.loggedUser.fname =  sessionStorage.fname898rtrg;
//    }
//

    $scope.editGeneralInformation = function () {
        //  var fields = document.querySelectorAll("form input[type='text'], form input[type='email']");
        var fields = document.querySelectorAll("form input[type='text']");
        for (var i = 0; i < fields.length; i++) {
            fields[i].classList.remove("readonlyInput");
            fields[i].removeAttribute("readonly");
        }
        var submitButton = document.querySelector("form input[type='submit']");
        submitButton.style.display = "block";
    };

    $scope.saveGeneralInformation = function () {

        if (document.form.fname.value == "") {
            alert("Please provide your first name!");
            document.form.fname.focus();
            return false;
        }
        if (document.form.lname.value == "") {
            alert("please provide your last name !");
            document.form.lname.focus();
            return false;
        }
        if (document.form.email.value == "") {
            alert("please provide your last name !");
            document.form.email.focus();
            return false;
        }

        var userPost = {email: $scope.loggedUser.email, fname: $scope.loggedUser.fname, lname: $scope.loggedUser.lname};

        //console.log(userPost);

        $http.post(kukusCornerUrl + updateProfileUrl, userPost).success(function (data) {
            $location.path("user/main");

        });
    };

    $scope.logOut = function () {
        sessionStorage.email8H5f3dFg = undefined;
        sessionStorage.logged = "false";
        $rootScope.flag = 0;
        $scope.profileDisplay();
        $location.path("/");
    };
});