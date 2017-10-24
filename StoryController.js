angular.module('storyApp').controller('StoryController', function($scope, $http){
    
    $scope.stories = JSON.parse(localStorage.getItem("stories"));
    console.log($scope.stories);    
//    localStorage.setItem("stories", JSON.stringify({1: "Bace Malin"}));
    $scope.saveStory = function(data) {
        if (data !== undefined) {
            var stories = JSON.parse(localStorage.getItem("stories"));
            if (stories === null) {
                var index = 1;
                stories = {};
                stories[index] = data;
                localStorage.setItem("stories", JSON.stringify(stories));
            } else {
                var index = parseInt(Object.keys(stories)[Object.keys(stories).length - 1]) + 1;
                stories[index] = data;
                localStorage.setItem("stories", JSON.stringify(stories));
            }
            $scope.stories = JSON.parse(localStorage.getItem("stories"));
            $scope.content = "";
            $scope.storyArea.$setPristine();
        } else {
            alert("Please enter a story.")
        }
    };
});