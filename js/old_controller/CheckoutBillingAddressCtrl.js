
KukusCorner.controller("CheckoutBillingAddressCtrl", function($scope, $location, $http, $rootScope) {

    var baseUrl=window.location.origin;
    var base = window.location.protocol;
    var url = window.location.host;

    if (!baseUrl) {
        baseUrl = base + "//" + url;
    }
    var basePathName=window.location.pathname;
    var kukusCornerUrl=baseUrl + basePathName;

    var getBillingRestUrl='REST/address/getBillingAddress';
    var addBillingRestUrl='REST/address/addBillingAddress';

    $scope.countryList= [
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

    $scope.stateList= [
        { label: 0, value: 'Select State...' },
        { label: 1, value: 'Alabama' },
        { label: 2, value: 'Alaska' },
        { label: 3, value: 'American Samoa' },
        { label: 4, value: 'Arizona' },
        { label: 5, value: 'Arkansas' },
        { label: 6, value: 'California' },
        { label: 7, value: 'Colorado' }
    ];


    function billingAddressOne(email){this.email=email; }
    var billingAddressPost=new billingAddressOne(sessionStorage.email8H5f3dFg);

    $http.post(kukusCornerUrl + getBillingRestUrl, billingAddressPost).success(function(data){
        $scope.billingAddressData=angular.fromJson(data);
    });
    // console.log($scope.shoppingAddressData)

    $scope.saveBillingInformation = function(){
        if( document.form.addressLine1.value == "" )
        {
            alert( "Please provide your addressLine one!" );
            document.form.addressLine1.focus() ;
            return false;
        }

//        if( document.form.addressLine2.value == "" )
//        {
//            alert( "Please provide your addressLine two!" );
//            document.form.addressLine2.focus() ;
//            return false;
//        }
        if( document.form.city.value == "" )
        {
            alert( "Please provide your city!" );
            document.form.city.focus() ;
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

      function billingAddress(email,addressLine1, addressLine2, city, state, country, zipCode, contact_num){
            this.email=email;
            this.addressLine1=addressLine1;
            this.addressLine2=addressLine2;
            this.city=city;
            this.state=state;
            this.country=country;
            this.zip=zipCode;
            this.contact_num=contact_num;
      };
        var billingPost=new billingAddress(sessionStorage.email8H5f3dFg,
            $scope.address.addressLine1,
            $scope.address.addressLine2,
            $scope.address.city,
            $scope.address.state,
            $scope.address.country,
            $scope.address.zipCode,
            $scope.address.phoneNumber
        );

        $http.post(kukusCornerUrl + addBillingRestUrl, billingPost).success(function(data){
//            $rootScope.popUpMessage = "Thank you for registration, we sent you an email, please verify it";
//            $scope.showPopUp();
        });
        $location.path("checkout/creditCardInfo");

    };

//    $scope.backToCart = function() {
//        window.history.back();
//    }
//
//    $scope.nextToOrderSummery = function() {
//        $location.path("checkout/orderSummery");
//    }
});