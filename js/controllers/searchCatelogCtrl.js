app.controller('searchCatelogCtrl',['$scope','$routeParams','$http', 'cakeService', function ($scope, $routeParams, $http, cakeService){
	$scope.searchParameter = $routeParams.searchParameter;
	
	  $http.get('data/flatfile.json').success(function(data, status, headers, config) {
		  $scope.products = data.items;
    		
    	  cakeService.setData($scope.products);
       });  
}])
  .filter('highlight', function($sce) {
    return function(text, phrase) {
      if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
        '<span class="highlighted">$1</span>');

      return $sce.trustAsHtml(text);
    };
  });

/*app.filter('searchFor', function(){
	return function(arr, searchString){
		if(!searchString){
			return arr;
		}
		var result = [];
		searchString = searchString.toLowerCase();
		angular.forEach(arr, function(item){
			if(item.name.toLowerCase().indexOf(searchString) !== -1){
			result.push(item);
		}
		});
		return result;
	};
});*/