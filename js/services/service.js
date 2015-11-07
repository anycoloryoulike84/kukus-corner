/*(function () {
	
	  var stid = [];
	  
	  return {
	     
	      setData: function(data) {
	       stid = data;
	         
	      },
	      
	      getData: function() {         
	          return stid;
	      },
	  };    

    angular.module('KukusCorner').factory('cakeService', cakeService);

}());*/

app.factory('cakeService', function() {

  var stid = [];

  return {
     
      setData: function(data) {
       stid = data;
         
      },
      
      getData: function() {         
          return stid;
      },
  };
 });

/*
app.service('sharedProperties', function() {
    var stringValue = 'test string value';
    var objectValue = {
        data: 'test object value'
    };
    
    return {
        getString: function() {
            return stringValue;
        },
        setString: function(value) {
            stringValue = value;
        },
        getObject: function() {
            return objectValue;
        }
    };
});*/