app.controller('singlePageController', ['$rootScope', '$scope','$http', '$routeParams',
    function($rootScope, $scope, $http, $routeParams) {
        $scope.article = $rootScope.articles[$routeParams.id];
}]);