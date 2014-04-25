/**
 * Created by RuoxiLu on 4/16/14.
 */


var roster = angular.module('roster', []);

roster.controller('RosterCtrl', function ($scope, $http) {
    $http.get('all_user.json').success(function (data) {
        $scope.users = data;

        $scope.classList = function () {
            var my_classList = new Array();
            var my_username;
            for (var i = 0; i < data.length; i++) {
                my_username = data[i].username.substring(0, 6);
                if ($.inArray(my_username, my_classList) === -1) {
                    my_classList.push(my_username);
                }
            }
            return my_classList;
        }
    });


//        $scope.correctNumber = function() {
//
//            var my_number;
//
//            my_number = this.username.substring(6, 8);
//            return _.equals(my_number);
//
//        }
    $scope.orderProp = $scope.users;

});
