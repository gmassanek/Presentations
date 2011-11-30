var events = require('events');

var read = function() {
  var stdin = process.openStdin();

  stdin.on('data', function (data) {
    console.log(data);
  });
};

describe('stdin', function(){
  it('test', function(){
    var ev = new events.EventEmitter();
    process.openStdin = function () { return ev; };

    var result = null;
    console.log = function(msg) {
      result = msg;
    };

    read();
    ev.emit('data', 'something');

    waitsFor(function(){ return result; });
    runs(function(){
      expect(result).toEqual('something');
    });
  });
});

