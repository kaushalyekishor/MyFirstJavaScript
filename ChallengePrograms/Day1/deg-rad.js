	  const readLie = require('prompt-sync')();
    const name = readLie('Enter angle? ');
    console.log("angle in radians:"+degrees_to_radians(name));
    //console.log(degrees_to_radians(name));

    function degrees_to_radians(degrees){
      var pi = Math.PI; //getting 3.14 value
      //console.log(pi);
      return degrees * (pi/180); 
    }
    