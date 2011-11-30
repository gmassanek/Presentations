
var module = {
  actOne: function(){
    this.actTwo();
  },
  actTwo: function(){
    console.log('act two!');
  }
};

describe("spies test", function(){
  it("can spy", function(){
    spyOn(module, 'actTwo')
    module.actOne();
    expect(module.actTwo).toHaveBeenCalled();
  });
});

