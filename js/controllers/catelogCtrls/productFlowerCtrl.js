
	//LIGHT BOX

	app.directive('modalDialog', function() {
		return {
		    restrict: 'E',
		    scope: {
		      show: '='
		    },
		    replace: true, // Replace with the template below
		    transclude: true, // we want to insert custom content inside the directive
		    link: function(scope, element, attrs) {
		      scope.dialogStyle = {};
		      if (attrs.width)
		        scope.dialogStyle.width = attrs.width;
		      if (attrs.height)
		        scope.dialogStyle.height = attrs.height;
		      scope.hideModal = function() {
		        scope.show = false;
		      };
		    },
		    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
		  };
	});

	
	//RATINGS
	  
	  app.directive('starRating',
		function() {
		  return {
				restrict : 'A',
				template : '<ul class="rating">'
						 + '	<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">'
						 + '\u2605'
						 + '</li>'
						 + '</ul>',
				scope : {
					ratingValue : '=',
					max : '=',
					onRatingSelected : '&'
				},
				link : function(scope, elem, attrs) {
					var updateStars = function() {
						scope.stars = [];
						for ( var i = 0; i < scope.max; i++) {
							scope.stars.push({
								filled : i < scope.ratingValue
							});
						}
					};
					
					scope.toggle = function(index) {
						scope.ratingValue = index + 1;
						scope.onRatingSelected({
							rating : index + 1
						});
					};
					
					scope.$watch('ratingValue',
						function(oldVal, newVal) {
							if (newVal) {
								updateStars();
							}
						}
					);
				}
			};			
		}
	);
	  
	  		//QUANTITY COUNTER
	  
	  app.directive('counter', function() {
		    return {
		        restrict: 'A',
		        scope: { value: '=value' },
		        template: '<a href="javascript:;" class="counter-minus" ng-click="minus()">-</a>\
		                  <input type="text" class="counter-field" ng-model="value" ng-change="changed()" ng-readonly="readonly">\
		                  <a  href="javascript:;" class="counter-plus" ng-click="plus()">+</a>',
		        link: function( scope , element , attributes ) {
		            // Make sure the value attribute is not missing.
		            if ( angular.isUndefined(scope.value) ) {
		                throw "Missing the value attribute on the counter directive.";
		            }
		            
		            var min = angular.isUndefined(attributes.min) ? null : parseInt(attributes.min);
		            var max = angular.isUndefined(attributes.max) ? null : parseInt(attributes.max);
		            var step = angular.isUndefined(attributes.step) ? 1 : parseInt(attributes.step);
		            
		            element.addClass('counter-wrapper');
		            
		            
		            // Sets the value as an integer 
		            
		            var setValue = function( val ) {
		                scope.value = parseInt( val );
		            };
		            
		            // Set the value initially, as an integer.
		            setValue( scope.value );
		            
		            // Decrement the value and make sure we stay within the limits, if defined.
		             
		            scope.minus = function() {
		                if ( min && (scope.value <= min || scope.value - step <= min) || min === 0 && scope.value < 1 ) {
		                    setValue( min );
		                    return false;
		                }
		                setValue( scope.value - step );
		            };
		            
		            // Increment the value and make sure we stay within the limits, if defined.
		            
		            scope.plus = function() {
		                if ( max && (scope.value >= max || scope.value + step >= max) ) {
		                    setValue( max );
		                    return false;
		                }
		                setValue( scope.value + step );
		            };
		        }
		    };
		});

	  //CONTROLLER

	  app.controller('productFlowerCtrl', ['$scope','$http', 'ngCart', 'cakeService', function($scope, $http, ngCart, cakeService) {
		  
		  $scope.quantity1 = 1;
		  $scope.ngCart = ngCart;
		  
		  ngCart.setShipping(0.99);
	      ngCart.setTaxRate(13);
	  
	  
	  //RATINGS
	    $scope.rating = 5;
		  $scope.rateFunction = function(rating){
			  console.log('Rating selected - ' + rating);
		  };
	  
		  
	  //GETTING IMAGES FROM JSON
	  
	  $http.get('data/datafile.json').success(function(data, status, headers, config) {
	    	
	    		$scope.product = data.items;
	    		$scope.productFlowers = data.items.Flowers;
	    		
	    		console.log("testme");
	    		
	    		cakeService.setData($scope.productFlowers);
	    		//console.log($scope.product[0].image);
	    	 });
	  
	/*  $http.get('data/flatfile.json').success(function(data, status, headers, config) {
		  $scope.product = data.items;
		  
	  });*/
	  
	  //SETTING UP MEDIUM SIZE IMAGE ON CLICK OF IMAGE
/*	  $scope.setMediumImage = function(index, classes) {	
		  
		    if ($scope.product){	
	    		 //console.log("MEDIUM IMAGE");
	    		 console.log($scope.product[index]);
	    	     $scope.modalShown = true;
	    		 $scope.lrgImageURL = $scope.product[index].image;
	    		 $scope.lrgImageName = $scope.product[index].name;
	    		 $scope.lrgImagePrice = $scope.product[index].price;
	    		 $scope.lrgImageIngredients = $scope.product[index].ingredients;
	    		 $scope.lrgImageCalories = $scope.product[index].nutrionalValue;
	    		 $scope.category = $scope.product[index].category;
	    		 $scope.lrgImage = $scope.product[index].image;
	    		 $scope.ImgId = $scope.product[index].id;
	 			 console.log($scope.ImgId);
		    }
	    		 
		    //  });	  
	  };*/

	}]);
	
	
	
		 