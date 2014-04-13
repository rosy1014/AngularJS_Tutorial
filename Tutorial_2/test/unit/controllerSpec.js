/**
 * Created by RuoxiLu on 4/13/14.
 */

describe('PhoneListCtrl', function(){
    var scope, ctrl, $httpBackend;

    // Load our app module definition before each test.
    beforeEach(module('phonecatApp'));


    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGet('phones.json').respond([{name:'Nexus S'},{name:'Motorola DROID'}])

        scope = $rootScope.$new();
        ctrl=$controller('PhoneListCtrl', {$scope:scope});
    }));

    it('should create "phones" model with 3 phones fetched from xhr', function(){
        expect(scope.phones.length).toBe(3);
        expect(scope.phones).toBeUndefined();
        $httpBackend.flush();

        expect(scope.phones).toEqual([{name: 'Nexus S'}, {name:"Motorola DROID"}

        ]);
    });

    it('should set the default value of orderProp model', function(){
        expect(scope.orderProp).toBe('age');
    });
});
