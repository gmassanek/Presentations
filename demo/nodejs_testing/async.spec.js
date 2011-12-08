var events = require('events');

var asyncWork = function(callback) {
  setTimeout(callback, 200);
};

describe('async', function(){
  it('test', function(){
    var called = false;
    asyncWork(function() {
      called = true;
    });

    waitsFor(function(){ return called; });

    runs(function(){
      expect(called).toBeTruthy();
    });
  });
});

