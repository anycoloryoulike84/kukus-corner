KukusCorner.controller('CakesCtrl', function ($scope, $location, $cookieStore, $rootScope, $http) {

    var baseUrl = window.location.origin;
    var base = window.location.protocol;
    var url = window.location.host;

    if (!baseUrl) {
        baseUrl = base + "//" + url;
    }
    var basePathName = window.location.pathname;
    var kukusCornerUrl = baseUrl + basePathName;

    var cakesRestUrl = 'REST/products/Cakes';
    var cartRestUrl = 'REST/cartService';
    var loginRestUrl = 'REST/login/getCustomer';

    var x = window.location.hash.split("=");
    console.log(x);
    var bb = x.length;
//    function ReadCookie()
//    {
//        var allcookies = document.cookie;
//        alert("All Cookies : " + allcookies );
//
//        // Get all the cookies pairs in an array
//        cookiearray  = allcookies.split(';');
//
//        // Now take key value pair out of this array
//        for(var i=0; i<cookiearray.length; i++){
//            name = cookiearray[i].split('=')[0];
//            value = cookiearray[i].split('=')[1];
//            alert("Key is : " + name + " and Value is : " + value);
//        }
//    }
    if (bb >= 2) {
        sessionStorage.email8H5f3dFg = x[1];
        sessionStorage.logged = "true";
        //var userPost = {email: sessionStorage.email8H5f3dFg, password: null};
        /*$http.post(kukusCornerUrl + loginRestUrl, userPost).success(function (data) {
            $rootScope.user = angular.fromJson(data);
        });*/

       // var fname=getCookie(fname);
        //var lname=getCookie(lname);
       // console.log("fname: "+ fname);
       // ReadCookie();


        $rootScope.profileDisplay();
    }
    $http.get(kukusCornerUrl + cakesRestUrl).success(function (data) {
        $rootScope.cakes = data;
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
        //console.log(id);

        var shoppingCartPost = {productId: id, quantity: 1, email: sessionStorage.email8H5f3dFg, date: "today"};

        console.log(shoppingCartPost);

        $http.post(kukusCornerUrl + cartRestUrl, shoppingCartPost).success(function (data) {
            $rootScope.productsInCart += 1;
            $rootScope.cakeData = data;
        }).error(function (cakeData, status, headers, config) {
                if (500 === status) {
                    window.alert(cakeData);
                }
            });
    };
});