/**
 * Created by RuoxiLu on 4/13/14.
 */

var phonecatApp = angular.module('phonecatApp',[]);

phonecatApp.controller('PhoneListCtrl', function ($scope){
    $scope.phones = [
        {'name': 'Nexus S', 'snippet' :'Fast just got faster with Nexus S.', 'age':1},
        {'name': 'Motorola XOOM with Wi-Fi', 'snippet': 'The Next, Next Generation tablet.','age':2},
        {'name': 'Motorola XOOM', 'snippet': 'The Next, Next Generation tablet.','age':3}
    ];
    $scope.orderProp='age'
    $scope.name = "World";
});

