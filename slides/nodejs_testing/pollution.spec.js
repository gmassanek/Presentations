describe('test pollution', function(){
  it('pollute tests', function(){
    process.openStdin = function () { return 1; };
    //test stuff
  });

  it('polluted test', function(){
    expect(function(){
      //process.openStdin is still mocked here!
      process.openStdin().on('data', function(data) {
        //process data
      });
    }).toThrow(new Error("Object 1 has no method 'on'"));
  });
});

