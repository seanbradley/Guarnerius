var app = angular.module('musician-profile', []);

app.directive("musicianTalent", function(){
    return {
        restrict:'E',
        templateUrl:'musician-talent.html'
    };
});
app.directive("musicianDetails", function(){
    return {
        restrict:'E',
        templateUrl:'musician-details.html',
        controller: function(){
            this.tab = 1;
            this.selectTab = function(setTab){
                this.tab = setTab;
            };
            this.isSelected = function(checkTab){
                return this.tab === checkTab;
            };
        },
        controllerAs:'detail'
    };
});

