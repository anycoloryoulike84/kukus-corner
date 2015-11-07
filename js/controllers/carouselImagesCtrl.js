app.controller('carouselImagesCtrl',['$scope', function ($scope){
  $scope.myInterval = 5000;
  $scope.slides = [
    {
      image: 'img/cake33.jpg'
    },
    {
      image: 'img/cake_cherry1.jpg'
    },
    {
      image: 'img/cars14.jpg'
    },
    {
      image: 'img/flower_color1.jpg'
    },
    {
        image: 'img/toys_all1.jpg'
    },
    {
      image: 'img/flower1.jpg'
    }
  ];
}]);