const utils = require('./utils');
const expect = require('expect');

describe('Utils',() => {

  describe('#Add',() => {
    it('should add two numbers ', () => {
      var res = utils.Add(11,22);
      expect(res).toBe(33).toBeA('number');
      //expect(typeof res).toBe('number'); //version compatible
      });
  });
  
    
    
    it('should add  number asynchronously..',(done) => {
      utils.asyncAdd(5,4,(res) => {
      expect(res).toBe(9).toBeA('number');
      done();
      });
      });
    
    it('should square  number asynchronously..',(done) => {
    utils.asyncSquare(5,(res) => {
    expect(res).toBe(25).toBeA('number');
    done();
    });
    });
    
    it('should square a number ', () => {
        var res = utils.Square(1);
        expect(res).toBe(1);
        expect(typeof res).toBe('number');
        
        });
    
        // it('comparing two objects',() =>
        // {
          //  expect(12).toNotBe(12);
    
    //expect({name:'sree'}).toEqual({name:'sree'});
    
    //expect([2,3,4]).toInclude(4);
    
    //expect([2,3,4]).toExclude(5);
    
    // expect({name:'sree',age:25}).toInclude({age:25});
    
       // });
    
       it('should set firstname and lastname',() => {
    var user = {loc:'hyd',age:32};
    var res = utils.SetName(user,'sri goud');
    
    //expect(user).toEqual(res);
    expect(res).toInclude({
    firstName :'sri',
    lastName:'goud'
    });
       });
    
       
});