angular.module('storyApp').controller('VideoController', function($scope, $http){
    
    $scope.videos = JSON.parse(localStorage.getItem("videos"));
    console.log($scope.videos);    
    //localStorage.setItem("videos", JSON.stringify({1: "https://www.youtube.com/embed/II-OZIxS7Z0"}));
    $scope.saveVideo = function(data) {
        if (data !== undefined) {
            var videos = JSON.parse(localStorage.getItem("videos"));
            if (videos === null) {
                var index = 1;
                videos = {};
                videos[index] = data;
                localStorage.setItem("videos", JSON.stringify(videos));
            } else {
                var index = parseInt(Object.keys(videos)[Object.keys(videos).length - 1]) + 1;
                videos[index] = data;
                localStorage.setItem("videos", JSON.stringify(videos));
            }
            $scope.videos = JSON.parse(localStorage.getItem("videos"));
            $scope.video = "";
            $scope.videoInput.$setPristine();
        }
    };
});

