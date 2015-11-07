KukusCorner.controller("SignUpCtrl", function($http, $scope, $location, $rootScope, promiseTracker, $q, $timeout) {
    var baseUrl=window.location.origin;
    var base = window.location.protocol;
    var url = window.location.host;

    if (!baseUrl) {
        baseUrl = base + "//" + url;
    }
    var basePathName=window.location.pathname;
    var kukusCornerUrl=baseUrl + basePathName;

    $scope.delay2 = 2000;

    var registerRestUrl='REST/register';
    var loginRestUrl='REST/login/getCustomer';

    $scope.newUser = function(trackerName, delay) {

       if( document.form.uEmail.value == "" )
        {
            alert( "Please provide your Email!" );
            document.form.uEmail.focus() ;
            return false;
        }else{
            // Put extra check for data format
            var ret = validateEmail();
            if( ret == false )
            {
                return false;
            }
        }

        if( document.form.userName.value == "" )
        {
            alert( "Please provide your first name!" );
            document.form.userName.focus() ;
            return false;
        }
        if( document.form.lastName.value == "" )
        {
            alert( "Please provide your last name!" );
            document.form.lastName.focus() ;
            return false;
        }

        if( document.form.pass1.value == "" )
        {
            alert( "Please provide a proper password! " );
            document.form.pass1.focus() ;
            return false;
        }
        if( document.form.pass2.value == "" )
        {
            alert( "Passwords does not match, please enter you correct password again! " );
            document.form.pass2.focus() ;
            return false;
        }

        if( document.form.pass1.value != document.form.pass2.value)
        {
            alert( "Passwords does not match, please enter you correct password again! " );
            document.form.pass2.focus() ;
            return false;
        }

       // sessionStorage.logged= "true";
           var customerPost=new Object();

            customerPost.email=$scope.customer.userEmail;
            customerPost.fname=$scope.customer.firstName;
            customerPost.lname=$scope.customer.lastName;
            customerPost.password=$scope.customer.password;

                console.log(customerPost);
       var loginObject={email:customerPost.email, password:customerPost.password};
       console.log(loginObject);

        $http.post(kukusCornerUrl +registerRestUrl, customerPost, {tracker: 'demo2'}).success(function(data,status){
            if(200 === status){
              // $scope.successdata = angular.fromJson(data);
                  window.alert(data);


                $http.post(kukusCornerUrl + loginRestUrl, loginObject).
                    success(function(data, status) {
                        if(200==status){
                            sessionStorage.logged= "true";
                            $rootScope.user =angular.fromJson(data);
                            sessionStorage.usergfr45tew=$rootScope.user;
                            $rootScope.profileDisplay();
                            console.log($rootScope.user);

                        $location.path("/catalog/cakes.html");
                        }
                    });
               }
        }).
            error(function(data, status, headers, config) {
                  if (500 === status) {
                    //console.log(data);
                   // $scope.errormessage = data;
                    window.alert(data);
                }
            });

        //For the demo we're using a simple promise not $http since that's easier to control
        var testPromise = $q.defer();
        promiseTracker(trackerName).addPromise(testPromise.promise);
        $timeout(function () {
            testPromise.resolve();
        }, delay);
    };

    $scope.checkPass = function(){
        //Store the password field objects into variables ...
        var pass1 = document.getElementById('pass1');
//        console.log(pass1);
        var pass2 = document.getElementById('pass2');
        //Store the Confimation Message Object ...
        var message = document.getElementById('confirmMessage');
        //Set the colors we will be using ...
        var goodColor = "#66cc66";
        var badColor = "#ff6666";
        //Compare the values in the password field
        //and the confirmation field
        if(pass1.value == pass2.value){
            //The passwords match.
            //Set the color to the good color and inform
            //the user that they have entered the correct password
            pass2.style.backgroundColor = goodColor;
            message.style.color = goodColor;
            message.innerHTML = "Passwords Match!";
        }else{
            //The passwords do not match.
            //Set the color to the bad color and
            //notify the user.
            pass2.style.backgroundColor = badColor;
            message.style.color = badColor;
            message.innerHTML = "Passwords Do Not Match!";
        }
    };

    function validateEmail()
    {
        var emailID = document.form.uEmail.value;
        atpos = emailID.indexOf("@");
        dotpos = emailID.lastIndexOf(".");
        if (atpos < 1 || ( dotpos - atpos < 2 ))
        {
            alert("Please enter correct email ID");
            document.form.uEmail.focus() ;
            return false;
        }
        return( true );
    }

});