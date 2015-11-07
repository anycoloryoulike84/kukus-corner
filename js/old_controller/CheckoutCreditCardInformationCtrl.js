KukusCorner.controller("CheckoutCreditCardInformationCtrl", function ($scope, $location, $http) {

        var baseUrl = window.location.origin;
        var base = window.location.protocol;
        var url = window.location.host;

        if (!baseUrl) {
            baseUrl = base + "//" + url;
        }
        var basePathName = window.location.pathname;
        var kukusCornerUrl = baseUrl + basePathName;

        var billingRestUrl = 'REST/address/getBillingAddress';
        var addBillingRestUrl = 'REST/address/addBillingAddress';
        var updateBillingRestUrl = 'REST/address/updateBillingAddress';
        var billAddressObject = {};
        billAddressObject.email=sessionStorage.email8H5f3dFg;

        $scope.credit = {};
        if (document.cardForm.firstName.value == '') {
            $scope.credit.firstName = sessionStorage.firstName123xxx;
        }
        if (document.cardForm.lastName.value == '') {
            $scope.credit.lastName = sessionStorage.lastName123ddd;
        }
        if (document.cardForm.userCard.value == '') {
            $scope.credit.cardNumber = sessionStorage.number123jjj;
        }
        if (document.cardForm.cvv2.value == '') {
            $scope.credit.cvv2Number = sessionStorage.cvv2123bbb;
        }

        $scope.address = {};
        if (document.cardForm.addressLine1.value == '') {
            $scope.address.addressLineOne = billAddressObject.addressLine1;
        }
        if (document.cardForm.addressLine2.value == '') {
            $scope.address.addressLineTwo = billAddressObject.addressLine2;
        }
        if (document.cardForm.city.value == '') {
            $scope.address.city = billAddressObject.city;
        }
        if (document.cardForm.zipCode.value == '') {
            $scope.address.zip = billAddressObject.zip;
        }
        if (document.cardForm.contactNumber.value == '') {
            $scope.address.contact_num = billAddressObject.contact_num;
        }


        $scope.months = [
            { label: 0, value: 'Select Month...' },
            { label: 1, value: 01 },
            { label: 2, value: 02 },
            { label: 3, value: 03 },
            { label: 4, value: 04 },
            { label: 5, value: 05 },
            { label: 6, value: 06 },
            { label: 7, value: 07 },
            { label: 8, value: 08 },
            { label: 9, value: 09 },
            { label: 10, value: 10 },
            { label: 11, value: 11 },
            { label: 12, value: 12 }
        ];

        // $scope.monthSelected = $scope.months[0];

        $scope.years = [
            {"id": 0, "name": "Select Year..." },
            {"id": 1, "name": 2014 },
            {"id": 2, "name": 2015 },
            {"id": 3, "name": 2016 },
            {"id": 4, "name": 2017 },
            {"id": 5, "name": 2018 },
            {"id": 6, "name": 2019 },
            {"id": 7, "name": 2020 },
            {"id": 8, "name": 2021 },
            {"id": 9, "name": 2022 },
            {"id": 10, "name": 2023 },
            {"id": 11, "name": 2024 },
            {"id": 12, "name": 2025 }
        ];

        // $scope.yearSelected = $scope.years[0];

        $scope.cards = [
            {"id": 0, "name": "Select Card..." },
            {"id": 1, "name": "visa" },
            {"id": 2, "name": "mastercard" },
            {"id": 3, "name": "amex" },
            {"id": 3, "name": "discover" }
        ];


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
        document.getElementById('bill').style.display = "none";

        function billingAddressOne(email) {
            this.email = email;
        }

        var billingOnePost = new billingAddressOne(sessionStorage.email8H5f3dFg);

        $http.post(kukusCornerUrl + billingRestUrl, billingOnePost).success(function (data) {
            $scope.billingAddressData = angular.fromJson(data);
            if ($scope.billingAddressData != null && $scope.billingAddressData.length > 0) {
                if ($scope.billingAddressData[0].addressId != null) {
                    document.getElementById("bill").style.display = "block";
                }
            }
        });


        $scope.nextToConfirmPage = function () {
            if (document.cardForm.firstName.value == "") {
                alert("Please provide your first name!");
                document.cardForm.firstName.focus();
                return false;
            }

            if (document.cardForm.lastName.value == "") {
                alert("Please provide your last name two!");
                document.cardForm.lastName.focus();
                return false;
            }

            if (document.cardForm.userCard.value == "" || isNaN(document.cardForm.userCard.value)) {
                alert("Please provide a credit card in the proper format #####.");
                document.cardForm.userCard.focus();
                return false;
            }
            if (document.cardForm.cvv2.value == "") {
                alert("Please provide a proper cvv2 number");
                document.cardForm.cvv2.focus();
                return false;
            }

            //credit card information session
            sessionStorage.expireMonth123aaa = $scope.credit.monthSelected.value;
            sessionStorage.cvv2123bbb = $scope.credit.cvv2Number;
            sessionStorage.expireYear123ccc = $scope.credit.yearSelected.name;
            sessionStorage.firstName123xxx = $scope.credit.firstName;
            sessionStorage.lastName123ddd = $scope.credit.lastName;
                 
                 if (document.cardForm.addressLine1.value == "") {
                     alert("Please provide your address line one!");
                     document.cardForm.addressLine1.focus();
                     return false;
                 }

                 if (document.cardForm.city.value == "" ) {
                     alert("Please provide a city");
                     document.cardForm.city.focus();
                     return false;
                 }
                 
                 if (document.cardForm.zipCode.value == "") {
                     alert("Please provide a zipcode");
                     document.cardForm.zipcode.focus();
                     return false;
                 }
                 if (document.cardForm.contactNumber.value == "") {
                     alert("Please provide a proper contactNumber");
                     document.cardForm.contactNumber.focus();
                     return false;
                 }

            billAddressObject.addressLine1 = $scope.address.addressLineOne;
            billAddressObject.addressLine2 = $scope.address.addressLineTwo;
            billAddressObject.city = $scope.address.city;
            billAddressObject.state = $scope.address.stateSelected.value;
            billAddressObject.country = $scope.address.countrySelected.value;
            billAddressObject.zip = $scope.address.zip;
            billAddressObject.contactNum = $scope.address.contact_num;
           
            $http.post(kukusCornerUrl + addBillingRestUrl, billAddressObject).success(function (data) {
                $location.path("checkout/confirmationPage");
            });
        };

        $scope.billToAddress = function () {
            if (document.cardForm.firstName.value == "") {
                alert("Please provide your first name!");
                document.cardForm.firstName.focus();
                return false;
            }

            if (document.cardForm.lastName.value == "") {
                alert("Please provide your last name!");
                document.cardForm.lastName.focus();
                return false;
            }

            if (document.cardForm.userCard.value == "" || isNaN(document.cardForm.userCard.value)) {
                alert("Please provide a credit card in the proper format #####.");
                document.cardForm.userCard.focus();
                return false;
            }
            if (document.cardForm.cvv2.value == "") {
                alert("Please provide a proper cvv2 number");
                document.cardForm.cvv2.focus();
                return false;
            }

            //credit card information session
            sessionStorage.expireMonth123aaa = $scope.credit.monthSelected.value;
            sessionStorage.cvv2123bbb = $scope.credit.cvv2Number;
            sessionStorage.expireYear123ccc = $scope.credit.yearSelected.name;
            sessionStorage.firstName123xxx = $scope.credit.firstName;
            sessionStorage.lastName123ddd = $scope.credit.lastName;
            sessionStorage.number123jjj = $scope.credit.cardNumber;
            sessionStorage.type123sss = $scope.credit.cardSelected.name;
            updateBillingPost = {email: sessionStorage.email8H5f3dFg, shippingId: $scope.billingAddressData[0].addressId};

            $http.post(kukusCornerUrl + updateBillingRestUrl, updateBillingPost).success(function (data) {
                $location.path("checkout/confirmationPage");
            });
        };

        $scope.backToOrderSummary = function () {
            window.history.back();
        };

    }
)
;