
app.controller('homeCtrl', ['$scope', '$http', '$window', 'cakeService', function($scope, $http, $window, cakeService) {

	
	console.log("Home controller");
	
	$http.get('data/flatfile.json').success(function(data, status, headers,config){
	    $scope.product = data.items;
	    
	    cakeService.setData($scope.product);
	   
	});
		
		
	//slider
	
	
	var imageCount = 1;
	var total = 7;
	function photo(x){
		
			imageCount = imageCount + x;
			
			if(imageCount > total){
					imageCount = 1;
				}
			
			if(imageCount < 1){
					imageCount = total;
				}
			if (image){
				 image.src = "img/color"+ imageCount +".jpg";				
			}
		
		clearInterval(time); 								// clear interval stops the set interval.
		time =  window.setInterval(function photoA() { 		// giving the value of time the somfunction below starts the loop 
	    	
	    		//var image = document.getElementById('image');
		    	imageCount = imageCount + 1;
		    	
		    	if(imageCount > total){
		    			imageCount = 1;
		    		}
		    	if(imageCount < 1){
		    			imageCount = total;
		    		}
			    	if (image){
						 image.src = "img/color"+ imageCount +".jpg";				
					}		    		
			},2000);
		}
	 
	var time = window.setInterval(function photoA() {    // just adding the function to the variable so you can target it.
		var image = document.getElementById('image');
		imageCount = imageCount + 1;
		if(imageCount > total){
				imageCount = 1;
			}
		if(imageCount < 1){
				imageCount = total;
			}
			if (image){
				 image.src = "img/color"+ imageCount +".jpg";				
			}
		},2000);
	
	
	
	//slider ends
 
	 
	//carousal
	
}]).directive("owlCarousel", [function() {
		return {
			restrict: 'E',
			transclude: false,
			link: function (scope) {
				scope.initCarousel = function(element) {
				  // provide any default options you want
					var defaultOptions = {
					};
					var customOptions = scope.$eval($(element).attr('data-options'));
					// combine the two options objects
					for(var key in customOptions) {
						defaultOptions[key] = customOptions[key];
					}
					// init carousel
					$(element).owlCarousel(defaultOptions);
				};
			}
		};
	}])
	.directive('owlCarouselItem', [function() {
		return {
			restrict: 'A',
			transclude: false,
			link: function(scope, element) {
			  // wait for the last item in the ng-repeat then call init
				if(scope.$last) {
					scope.initCarousel(element.parent());
				}
			}
		};
	}]);
//carousal ends
		 



