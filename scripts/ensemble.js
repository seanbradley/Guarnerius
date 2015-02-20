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
