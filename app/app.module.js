var app = angular.module('myApp', ['ngRoute', 'angularUtils.directives.dirPagination', 'angulike'])
    .run([
        '$rootScope', function ($rootScope) {
            $rootScope.facebookAppId = '[808331735967449]'; // set your facebook app id here
        }
    ]);