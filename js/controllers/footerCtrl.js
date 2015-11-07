app.controller('footerCtrl', function($scope) {
	console.log("footer controller");
});
	
app.directive('footers', function() {
		  return {
		    templateUrl:'./html/footer.html'
		  };
		});
	
	
