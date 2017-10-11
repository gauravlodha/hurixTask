var app = angular.module("bookStore", []);


app.controller('indexController', function myFunction ($scope, test) {
    {
    	// $scope.data = {};
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
});