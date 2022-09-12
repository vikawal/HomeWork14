let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  let greenEnergy = object => {
    object['Fuel Type'] = {
      'Fuel Type': 'avocado oil'
    }
  };
  //console.log(greenEnergy(spaceship));
  //console.log(spaceship['Fuel Type']);
  // Write your code below
  
  let remotelyDisable = object => {
    object.disabled = true 
   
  };
 
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  console.log(spaceship);