'use strict';

angular.module('confusionApp')
    .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {


        $scope.dish= menuFactory.getDish(3);

        $scope.dishes=menuFactory.getDishes();


    }]);