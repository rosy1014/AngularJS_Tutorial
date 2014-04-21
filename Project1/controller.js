/**
 * Created by RuoxiLu on 4/16/14.
 */

//var rosterList = angular.module('rosterList', []);
var roster = angular.module('rosterList', []);
roster.controller('RosterCtrl', function ($scope, $http) {
    $http.get('all_user.json').success(function(data) {
        $scope.user = data;
    });

    $scope.orderProp = 'username[0:6]';
});

