describe('fixed test pollution', function(){
  beforeEach(function(){
    this._openStdin = process.openStdin;
  });

  afterEach(function(){
   process.openStdin = this._openStdin;
  });

  var mockedOpenStdin = function(){ return 1; };

  it('no longer pollute tests', function(){
    process.openStdin = mockedOpenStdin;
    //test stuff
  });

  it('no longer polluted test', function(){
    expect(process.openStdin).toNotEqual(mockedOpenStdin);
  });
});
