var app = angular.module("ensemble", ["musician-profile", "musician-data"]);
app.controller("RosterController", function(){
    this.musicians = instrumentalists;
});
app.controller("ReviewController", function(){
    this.review = {};
    this.addReview = function(musician){
        this.review.createdOn = Date.now();
        musician.reviews.push(this.review);
        this.review = {};
    };
});

app.controller("OrchestraController", function($scope,$http){
   /*  $http.get("http://www.w3schools.com/website/Customers_JSON.php") */
    $http.get("http://localhost:5000/cust.txt") 
    .success(function(response) {$scope.data = response;});
});

/*
app.controller('RosterController', ['http', function($http){
    var roster = this;
    store.products = [];
    $http.get('/localhost:8080/musicians').success(function(data){
        roster.musicians = data;
    });
}]);


app.controller('OrchCtrl', function($scope, $http) {
    
    $scope.add = function(){
        $http.get($scope.url).then(function(response) {
            $scope.Musicians = response.data.queries.request.info;
            $scope.musicians.push($scope.Musicians);
        });
    };

});


 $http.get('https://localhost:8080').then(function(resp) {
    $scope.musicians = resp.data;
    // For JSON responses, resp.data contains the result
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  })
*/
