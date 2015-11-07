
app.controller('cartCtrl',['ngCart', '$log', '$scope', function (ngCart, $log, $scope) {


        $scope.httpSettings = {
            url:'/checkout'
        };

        $scope.payPalSettings ={ paypal:{
            business:'svidyarthi@drishticon.com',
            item_name:'Order',
            item_number:'item_number',
            currency_code:'USD'
        }};

    $scope.showCart = function(){

        $log.info ('---Total Cost:---');
        $log.info (ngCart.totalCost());
        $log.info ('---Items in Cart:---');
        $log.info (ngCart.getItems());

    };

}]);
  
