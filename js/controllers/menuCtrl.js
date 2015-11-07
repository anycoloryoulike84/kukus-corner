app.controller('menuCtrl', function($scope) {
	console.log("menu controller");
});
	
app.directive('menu', function() {
		  return {
		    templateUrl:'./html/menu.html'
		  };
		});
	
	
