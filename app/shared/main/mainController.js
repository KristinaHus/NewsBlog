app.controller('mainController', ['$rootScope', '$scope', '$routeParams', '$http',
    function($rootScope, $scope, $routeParams, $http, articles) {
        $scope.articles = [];
        $http.get('app/shared/articles/articles.json')
            .then(function(data) {
                $scope.articles = data.data.articles;
                $rootScope.articles = data.data.articles;
            })
            .catch(function(err) {
            console.log(err);
        });
}]);