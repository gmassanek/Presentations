var events = require('events');
var emitter = new events.EventEmitter();

describe("event emitter matcher", function(){
  beforeEach(function(){
    this.addMatchers({
      toHaveListener: function(event) {
        return this.actual.listeners(event).length > 0;
      }
    });
  });

  it("can test event emitter better with matchers", function(){
    emitter.on('data', function(){ console.log('data!'); });
    expect(emitter).toHaveListener('data');
  });
});


