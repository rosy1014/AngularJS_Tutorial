/**
 * Created by RuoxiLu on 4/13/14.
 */

describe('PhoneListCtrl', function(){
    var scope, ctrl;

    beforeEach(module('phonecatApp'));

    beforeEach(inject(function($controller){
        scope ={};
        ctrl=$controller('PhoneListCtrl', {$scope:scope});
    }));

    it('should create "phones" model with 3 phones', function(){
        expect(scope.phons.length).toBe(3);
    });

    it('should set the default value of orderProp model', function(){
        expect(scope.orderProp).toBe('age');
    });
});
