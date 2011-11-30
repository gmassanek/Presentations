
global.currentDate = function(){
  return new Date();
};

var fakeDate = function(year,month,day) {
  spyOn(global, "currentDate").andCallFake(function() { 
    return new Date(year,month,day);
  });
};

describe("date test", function(){
  it("can spy currentDate", function(){
    fakeDate(2001, 11, 11);

    var now = global.currentDate();
    expect(now.getFullYear()).toEqual(2001);
  });
});


