KukusCorner.controller("CheckoutShippingAddressCtrl", function ($scope, $location, $http, $rootScope) {
    var baseUrl = window.location.origin;
    var base = window.location.protocol;
    var url = window.location.host;

    if (!baseUrl) {
        baseUrl = base + "//" + url;
    }
    var basePathName = window.location.pathname;
    var kukusCornerUrl = baseUrl + basePathName;

    var getShippingRestUrl = 'REST/address/getShippingAddress';
    var addShippingRestUrl = 'REST/address/addShippingAddress';
    var updateShippingRestUrl = 'REST/address/updateShippingAddress';
    var shipAddressObject={};

    $scope.address = {};
    if (document.form.addressLine1.value == '') {
        $scope.address.addressLineOne = shipAddressObject.addressLine1;
    }
    if (document.form.addressLine2.value == '') {
        $scope.address.addressLineTwo = shipAddressObject.addressLine2;
    }
    if (document.form.city.value == '') {
        $scope.address.city = shipAddressObject.city;
    }
    if (document.form.zip.value == '') {
        $scope.address.zip = shipAddressObject.zip;
    }
    if (document.form.contact_num.value == '') {
        $scope.address.contact_num = shipAddressObject.contact_num;
    }

    $scope.countryList = [
        { label: 0, value: 'Select Country...' },
        { label: 1, value: 'USA' },
        { label: 2, value: 'AFGHANISTAN' },
        { label: 3, value: 'ALBANIA' },
        { label: 4, value: 'AMERICAN SAMOA' },
        { label: 5, value: 'ANDORRA' },
        { label: 6, value: 'ANGOLA' },
        { label: 7, value: 'ANGUILLA' }
    ];

    //$scope.countrySelected = $scope.countryList[0];

    $scope.stateList = [
        { label: 0, value: 'Select State...' },
        { label: 1, value: 'Alabama' },
        { label: 2, value: 'Alaska' },
        { label: 3, value: 'American Samoa' },
        { label: 4, value: 'Arizona' },
        { label: 5, value: 'Arkansas' },
        { label: 6, value: 'California' },
        { label: 7, value: 'Colorado' }
    ];

    // $scope.stateSelected = $scope.stateList[0];

    function shippingAddressOne(email) {
        this.email = email;
    }

    var addressOnePost = new shippingAddressOne(sessionStorage.email8H5f3dFg);

    console.log(addressOnePost);

    document.getElementById('shipAddress').style.display = "none";

    if (sessionStorage.email8H5f3dFg != undefined) {
        $http.post(kukusCornerUrl + getShippingRestUrl, addressOnePost).success(function (data) {
            $scope.shippingAddressData = angular.fromJson(data);
            if ($scope.shippingAddressData != null && $scope.shippingAddressData.length > 0) {
                if ($scope.shippingAddressData[0].addressId != undefined) {
                    document.getElementById('shipAddress').style.display = "block";
                }
            }
        });
    }

    $scope.saveShippingInformation = function () {
        if (document.form.addressLine1.value == "") {
            alert("Please provide your addressLine one!");
            document.form.addressLine1.focus();
            return false;
        }

//        if( document.form.addressLine2.value == "" )
//        {
//            alert( "Please provide your addressLine two!" );
//            document.form.addressLine2.focus() ;
//            return false;
//        }
        if (document.form.city.value == "") {
            alert("Please provide your city!");
            document.form.city.focus();
            return false;
        }
//        if( document.form.state.value == "-1" )
//        {
//            alert( "Please provide your state!" );
//            document.form.state.focus() ;
//            return false;
//        }
//        if( document.form.country.value == "-1" )
//        {
//            alert( "Please provide your country!" );
//            document.form.country.focus() ;
//            return false;
//        }

        if (document.form.zip.value == "" || isNaN(document.form.zip.value) || document.form.zip.value.length != 5) {
            alert("Please provide a zip in the proper format #####.");
            document.form.zip.focus();
            return false;
        }
        if (document.form.contact_num.value == "") {
            alert("Please provide a phone number");
            document.form.contact_num.focus();
            return false;
        }

//       var shipAddressObject={};
        shipAddressObject.email=sessionStorage.email8H5f3dFg;
        /*if ($scope.shippingAddressData != null && $scope.shippingAddressData.length > 0) {
            sessionStorage.addressLine1bcb87fr = $scope.shippingAddressData[0].addresseLine1;
            sessionStorage.addressLine2bn34d = $scope.shippingAddressData[0].addresseLine2;
            sessionStorage.city38hfkg = $scope.shippingAddressData[0].city;
            sessionStorage.state67fhg = $scope.address.stateSelected.value;
            sessionStorage.country767asde = $scope.address.countrySelected.value;
            sessionStorage.zip676glmn = $scope.shippingAddressData[0].zip;
            sessionStorage.phone787gfbr = $scope.shippingAddressData[0].contact_num;

            shipAddressObject.addressLine1=$scope.shippingAddressData[0].addresseLine1;
            shipAddressObject.addressLine2=$scope.shippingAddressData[0].addresseLine2;
            shipAddressObject.city=$scope.shippingAddressData[0].city;
            shipAddressObject.state=$scope.address.stateSelected.value;
            shipAddressObject.country=$scope.address.countrySelected.value;
            shipAddressObject.zip=$scope.shippingAddressData[0].zip;
            shipAddressObject.contact_num=$scope.shippingAddressData[0].contact_num;
        } else {
            sessionStorage.addressLine1bcb87fr = $scope.address.addressLineOne;
            sessionStorage.addressLine2bn34d = $scope.address.addressLineTwo;
            sessionStorage.city38hfkg = $scope.address.city;
            sessionStorage.state67fhg = $scope.address.stateSelected.value;
            sessionStorage.country767asde = $scope.address.countrySelected.value;
            sessionStorage.zip676glmn = $scope.address.zip;
            sessionStorage.phone787gfbr = $scope.address.contact_num;*/

            shipAddressObject.addressLine1=$scope.address.addressLineOne;
            shipAddressObject.addressLine2=$scope.address.addressLineTwo;
            shipAddressObject.city=$scope.address.city;
            shipAddressObject.state=$scope.address.stateSelected.value;
            shipAddressObject.country=$scope.address.countrySelected.value;
            shipAddressObject.zip=$scope.address.zip;
            shipAddressObject.contactNum=$scope.address.contact_num;
       // }

       /* function shippingAddress(email, addressLine1, addressLine2, city, state, country, zip, contact_num) {
            this.email = email;
            this.addressLine1 = addressLine1;
            this.addressLine2 = addressLine2;
            this.city = city;
            this.state = state;
            this.country = country;
            this.zip = zip;
            this.contact_num = contact_num;
        };

        var shippingPost = new shippingAddress(sessionStorage.email8H5f3dFg,
            sessionStorage.addressLine1bcb87fr,
            sessionStorage.addressLine2bn34d,
            sessionStorage.city38hfkg,
            sessionStorage.state67fhg,
            sessionStorage.country767asde,
            sessionStorage.zip676glmn,
            sessionStorage.phone787gfbr
        );*/
        console.log(shipAddressObject);

        $http.post(kukusCornerUrl + addShippingRestUrl, shipAddressObject).success(function (data) {
            $location.path("checkout/orderSummery");
        });
    };

    $scope.shipToAddress = function () {
        updateShippingPost = {email: sessionStorage.email8H5f3dFg, shippingId: $scope.shippingAddressData[0].addressId};

        $http.post(kukusCornerUrl + updateShippingRestUrl, updateShippingPost).success(function (data) {
            $location.path("checkout/orderSummery");
        });
    };

    $scope.backToCart = function () {
        window.history.back();
        // $location.path("cart");
    };
})
;