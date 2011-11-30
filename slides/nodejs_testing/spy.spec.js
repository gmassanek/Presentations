
var asyncWork= function(callback){
  callback();
};

describe("spies test", function(){
  it("can spy", function(){
    var spy = jasmine.createSpy();
    asyncWork(spy);
    expect(spy).toHaveBeenCalled();
  });
});

