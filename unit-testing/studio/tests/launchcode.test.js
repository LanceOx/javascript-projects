const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("return 'nonprofit' as key value of organization", function(){
    let keyval = launchcode.organization;
    expect(keyval).toBe('nonprofit');
  })

  test("return 'jeff' as a key value of executiveDirector", function(){
    let dude = launchcode.executiveDirector;
    expect(dude).toBe('jeff');
  })

  test("return '100' as a key value of percentageCoolEmployees", function(){
    let employed = launchcode.percentageCoolEmployees;
    expect(employed).toBe('100')
  })

  test("return ['Web Developement', 'Data Analysis', 'Liftoff'] as a key value for programsOffered", function(){
    let array = launchcode.programsOffered;
    expect(array).toStrictEqual(['Web Developement', 'Data Analysis', 'Liftoff'])
  })

  test('returns "Launch!" when divisible by 2', function(){
    expect(launchcode.launchOutput(2)).toBe('Launch!');
    expect(launchcode.launchOutput(3)).toBe('code!');
    expect(launchcode.launchOutput(5)).toBe('rocks!');
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
  })

  
});
