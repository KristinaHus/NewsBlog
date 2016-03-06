app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "mainController",
            templateUrl: "app/components/home/homeView.html"
        })
        .when('/news', {
            controller: "mainController",
            templateUrl: "app/components/news/newsView.html"
        })
        .when('/news/:id', {
            controller: "singlePageController",
            templateUrl: "app/components/singlePage/singlePageView.html"
        })
        .when('/aboutUs', {
            controller: 'aboutUsController',
            templateUrl: 'app/components/aboutUs/aboutUsView.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
