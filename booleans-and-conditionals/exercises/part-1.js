
// Declare and initialize the variables for exercise 1 here:

// BEFORE running the code, predict what will be printed to the console by the following statements:
console.log(Boolean("true"));
console.log(Boolean("TRUE"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean('LaunchCode'));

console.log("-boolean")

        console.log(Boolean(3 == 4));
console.log(Boolean(3 + 4));
console.log(Boolean(3 + 4 === 7));
console.log(Boolean("false"))

console.log("-loose equality")
        console.log(4 == "4")
        console.log('0' == 0);
console.log(0 == '');
console.log('0' == '');
 
console.log("-strict equality")
            
            console.log(7 === "7");
            console.log(0 === false);
            console.log(0 === '');
    
            console.log("-practice")
        console.log(7 ==- "7")
        console.log("7" ==+ 7)
        console.log("7" === "7")
        console.log("7" ===- "7")
        console.log("7" ===+ "7")
        console.log("7" ===+ 7)
  let v = ("-")
    
    console.log("-Logical AND (&&)")

    console.log(7 > 5 && 5 > 3);
console.log(7 > 5 && 2 > 3);
console.log(2 > 3 && 'dog' === 'cat');

            console.log("-Logical OR (||)")

            console.log(7 > 5 || 5 > 3);
console.log(7 > 5 || 2 > 3);
console.log(2 > 3 || 'dog' === 'cat');

            console.log("-Logical NOT (!) reverse the boolean")

            console.log(!true);
console.log(!false);
console.log( !(5 > 7) );
console.log( !('dog' === 'cat') );
console.log( !('big' === 'small'))
console.log( !("small" === "small"));
console.log( !(92 < 13));

        console.log("-Operational Preedence")

        console.log("x * 5 >= 10 && y - 6 <= 20")
    
            
    console.log("-Practice")
    console.log(false && false)
    console.log("false" && "false")
    console.log(true && "true")
    
    console.log(v)
        console.log("true" || "true")
        console.group("true" || "false")
        console.log("false" || "true")
        console.log("false" || "false")

console.log(v) 

console.log("Questions")

    console.log(((5*3) > 10) && ((4+6) === 11))
    console.log(5 * 3)
    console.log(15 > 10)
    console.log((4 + 6) === 11)
console.log(v)
console.log(4 < 3 || 2 < 3)

        console.log("IF statements")

 //change the value to true, and it will not run//
       
 
    
 let w = 10;
 const z = 10;
 
 if (w > z) {
    console.log("w is greater than z");
 } else if (w < z) {
    console.log("w is less than z");
 } 
 else (w = z) 
        console.log("w is equal to z")
 console.log("-")
        let x = 10;
        let y = 20;
        
        if (x > y) {
           console.log("x is greater than y");
        } else if (x < y) {
           console.log("x is less than y");
        } else if (x % 5 === 0) {
           console.log("x is divisible by 5");
        } else if (x % 2 === 0) {
           console.log("x is even");
        }
     
        let a = 7;
        if (a % 2 === 1) {
           console.log("Launch");
        } else if (a > 5) {
           console.log("Code");
        } else {
           console.log("LaunchCode");
        }
        console.log("-")




  console.log("EXERCISES")
//what is the crew and shuttle status//
console.log("-")
        let engineIndicatorLight = ('green');
        let spaceSuitsOn = (true);
        let shuttleCabinReady = (true);
        let crewStatus = (spaceSuitsOn && shuttleCabinReady);
        let computerStatusCode = 200;
        let shuttleSpeed = 15000;

        if (engineIndicatorLight === "green") {
            console.log("engines have started");
         } else if (engineIndicatorLight === "green blinking") {
            console.log("engines are preparing to start");
         } else {
            console.log("engines are off");
         }

       if (crewStatus) {
            console.log("Crew Ready")
       }
       else {
        console.log("Crew not Ready");
       }
       if (computerStatusCode === 400) {
        console.log("Please stand by. Computer is rebooting.");
       }
       else if (computerStatusCode === 200) {
        console.log("Success! Computer online.");
       }
       else {
        console.log("ALERT: Computer offline!");
        
       }
    if (shuttleSpeed > 17500) {
console.log("ALERT: Escape velocity reached!");
    }
    else if (shuttleSpeed < 8000) {
        console.log("ALERT: Cannot maintain orbit!");
    }
    else {
        console.log("Stable speed");
    }
    if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
        console.log("all systems go");
     } else {
        console.log("WARNING. Not ready");
     }
     console.log("-")
     if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
        console.log("WARNING. Not ready");
     } else {
        console.log("all systems go");
     }
console.log("-")
//Monitor the shuttles fuel status//

       
     
     /*// "last place" or secondary to the original function has to come first, other wise
     the code will not run, since it reaches a "true" statement in the sequence, before reaching
     the desired or technically "true" statement.
     let engineTemperature = 2400*/
    let fuelLevel = 21000  
    let engineTemperature = 2400   
     if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red flashing") {
        console.log("ENGINE FAILURE IMMINENT!")
     } 
     else if (fuelLevel <= 5000 || engineTemperature > 2500) {
        console.log("Check fuel level. Engines running hot.");
     }
        else if (fuelLevel >= 20000 && engineTemperature <= 2500) {
            console.log("Full tank. Engines good.")
    }
    else if (fuelLevel > 10000 && engineTemperature <= 2500) {
        console.log("Fuel level above 50%. Engines good.")
    }
       else if (fuelLevel > 5000 && engineTemperature <= 2500) {
            console.log("Fuel level above 25%. Engines good.")
        }
      
        else {
            console.log("Fuel and engine status pending...");
          }
    
          let commandOverride = true 
         if (fuelLevel > 20000 && engineIndicatorLight === "red flashing" || !commandOverride === false) [
            console.log("Cleared to launch!")
          ] 
          else {console.log("Launch Scrubbed")
        }