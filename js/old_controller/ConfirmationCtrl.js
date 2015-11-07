KukusCorner.controller("ConfirmationCtrl",
    function ($scope, $location, $http, $rootScope, promiseTracker, $q, $timeout) {

        var baseUrl = window.location.origin;
        var base = window.location.protocol;
        var url = window.location.host;

        if (!baseUrl) {
            baseUrl = base + "//" + url;
        }
        var basePathName = window.location.pathname;
        var kukusCornerUrl = baseUrl + basePathName;

        $scope.delay1 = 15000;

        var checkoutRestUrl = 'REST/checkout';
        var paymentIntegratorUrl = 'REST/paymentIntegratorV1/pay';

        var orderSummaryPost = {email: sessionStorage.email8H5f3dFg};

        // console.log(orderSummaryPost);

        $http.post(kukusCornerUrl + checkoutRestUrl, orderSummaryPost, {tracker: 'demo1'}).success(function (data) {
            $scope.orderItems = angular.fromJson(data);
        });

        $scope.creditCard = function (trackerName, delay) {

            var creditCardObject = {
                expireMonth: sessionStorage.expireMonth123aaa,
                cvv2: sessionStorage.cvv2123bbb,
                expireYear: sessionStorage.expireYear123ccc,
                firstName: sessionStorage.firstName123xxx,
                lastName: sessionStorage.lastName123ddd,
                number: sessionStorage.number123jjj,
                type: sessionStorage.type123sss
            };

            var payObject = {
                email: sessionStorage.email8H5f3dFg,
                creditCard: creditCardObject
            };

            $http.post(kukusCornerUrl + paymentIntegratorUrl, payObject).success(function (data) {
                $rootScope.orderPlaced = angular.fromJson(data);
                $location.path("/checkout/thankYou");
            }).error(function (data, status, headers, config) {
                    if (500 == status) {
                        window.alert(orderPlaced);
                    }
                });

            // console.log($rootScope.orderPlaced)

            //For the demo we're using a simple promise not $http since that's easier to control
            var testPromise = $q.defer();
            promiseTracker(trackerName).addPromise(testPromise.promise);
            $timeout(function () {
                testPromise.resolve();
            }, delay);
        };

        $scope.backToCreditCard = function () {
            window.history.back();
        };

        $scope.onClick = function () {
            window.print();
            return false;
        };
    });