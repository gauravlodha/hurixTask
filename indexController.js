var app = angular
            .module("bookStore", [])
            .controller('indexController', function myFunction($scope, $http) {
    $http.get('bookService.json')
    .then(function(result) {
        //console.log(result.data);
        $scope.bookList = angular.fromJson(result.data);
        //console.log($scope.bookList);
    });
$scope.addToCart = function (item) {
        alert('Item added into cart');
        alert(item.bookName +" | "+ item.price +" | "+ item.author);
    };
});


/*app.controller('indexController', function myFunction ($scope, test) {
   {
    	 $scope.data = {};
     	test.getData().then(function(data){
     	 $scope.bookList = data.data;
    });
 }


     $scope.addToCart = function (item) {
        alert('Item added into cart');
        alert(item.bookName +" | "+ item.price +" | "+ item.author);
    };
});

app.service('test', function ($http) {
    this.getData = function () {
        return $http.get('bookService.json');
    }
});*/


