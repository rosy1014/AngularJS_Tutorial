/**
 * Created by RuoxiLu on 4/13/14.
 */
describe('PhoneCat App', function(){
 describe('Phone List View', function(){

     beforeEach(function(){
         browser.get('app/index.html');
     });

     it('should filter the phone list as user types into the search box'), function(){
         var phoneList = element.all(by.repeater('phone in phones'));
         var query = element(by.model('query'));

         expect(phoneLst.count()).toBe(3);

         query.sendKeys('nexus');
         expect(phoneList.count()).toBe(1);

         query.clear();
         query.sendKeys('motorola');
         expect(phoneList.count()).toBe(2);

     });
 }));
})