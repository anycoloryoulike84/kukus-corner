KukusCorner.controller("UserShippingInformationCtrl", function($scope, $location, $rootScope, $http) {
    var baseUrl=window.location.origin;
    var base = window.location.protocol;
    var url = window.location.host;

    if (!baseUrl) {
        baseUrl = base + "//" + url;
    }
    var basePathName=window.location.pathname;
    var kukusCornerUrl=baseUrl + basePathName;

    var getShippingRestUrl='REST/address/getShippingAddress';
    var updatePreferredShipRestUrl='REST/address/updatePreferedShippingAddress';

//    $scope.user = $rootScope.user;

    var shippingAddressPost={email:sessionStorage.email8H5f3dFg};

    $http.post(kukusCornerUrl + getShippingRestUrl, shippingAddressPost).success(function(data){
        $scope.shippingAddressData=angular.fromJson(data);
        // console.log($scope.shippingAddressData);
        document.getElementById('shippingAddress').style.display = "block";
    });


    $scope.editShippingInformation = function() {
        var fields = document.querySelectorAll(".userDetails form input[type='text'], .userDetails form input[type='tel'], .userDetails form input[type='number']");
        for (var i = 0; i < fields.length; i++) {
            fields[i].classList.remove("readonlyInput");
            fields[i].removeAttribute("readonly");
        }
             var submitButton = document.querySelector(".userDetails form input[type='submit']");
             submitButton.style.display = "block";
    };

    $scope.saveShippingInformation = function() {
        if( document.form.addressLine1.value == "" )
        {
            alert( "Please provide your addressLine one!" );
            document.form.addressLine1.focus() ;
            return false;
        }

        if( document.form.addressLine2.value == "" )
        {
            alert( "Please provide your addressLine two!" );
            document.form.addressLine2.focus() ;
            return false;
        }
        if( document.form.city.value == "" )
        {
            alert( "Please provide your city!" );
            document.form.city.focus() ;
            return false;
        }
        if( document.form.state.value == "-1" )
        {
            alert( "Please provide your state!" );
            document.form.state.focus() ;
            return false;
        }
        if( document.form.country.value == "-1" )
        {
            alert( "Please provide your country!" );
            document.form.country.focus() ;
            return false;
        }

        if( document.form.zip.value == "" || isNaN( document.form.zip.value) || document.form.zip.value.length != 5)
        {
            alert( "Please provide a zip in the proper format #####." );
            document.form.zip.focus() ;
            return false;
        }
        if( document.form.phone.value == "" )
        {
            alert( "Please provide a phone number" );
            document.form.phone.focus() ;
            return false;
        }

      function shippingAddress(addressId, addressLine1, addressLine2, city, state, country, zip, contactNum){
            this.addressId=addressId;
            this.addressLine1=addressLine1;
            this.addressLine2=addressLine2;
            this.city=city;
            this.state=state;
            this.country=country;
            this.zip=zip;
            this.contactNum=contactNum;
      };
     var shippingPost=new shippingAddress(
            $scope.shippingAddressData[0].addressId,
            $scope.shippingAddressData[0].addressLine1,
            $scope.shippingAddressData[0].addressLine2,
            $scope.shippingAddressData[0].city,
            $scope.shippingAddressData[0].state,
            $scope.shippingAddressData[0].country,
            $scope.shippingAddressData[0].zipCode,
            $scope.shippingAddressData[0].contactNumber
       );
    // console.log(shippingPost);

        $http.post(kukusCornerUrl + updatePreferredShipRestUrl, shippingPost).success(function(data){
             $location.path("user/main");
        });
    };
});