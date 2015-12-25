'use strict';

angular.module('confusionApp')

    .controller('ContactController', ['$scope',function($scope) {

    }])
    .controller('DishDetailController', ['$scope', '$routeParams', 'menuFactory', function($scope, $routeParams, menuFactory) {

        var dish= menuFactory.getDish(parseInt($routeParams.id,10));
        $scope.dish = dish;
    }])
    .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {


        $scope.dish= menuFactory.getDish(3);

        $scope.dishes=menuFactory.getDishes();


    }]);