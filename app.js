var app = angular
        .module('storyApp', [])
        .config(function($sceDelegateProvider) {
            $sceDelegateProvider.resourceUrlWhitelist([
              'self',
              'https://www.youtube.com/**'
            ]);
          });