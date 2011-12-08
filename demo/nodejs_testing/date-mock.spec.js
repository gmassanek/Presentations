
describe("mocking Dates", function(){
  beforeEach(function(){
    this._Date = Date;
  });

  afterEach(function(){
    global.Date = this._Date;
  });

  it("can mock global.Date", function(){
    var testContext = this;

    spyOn(global, 'Date').andCallFake(function(){
      return new testContext._Date(1999, 4, 8);
    });

    var raw = new Date();
    var old = new this._Date(1900, 10, 10);

    expect(raw.getFullYear()).not.toEqual(old.getFullYear());
  });
});

