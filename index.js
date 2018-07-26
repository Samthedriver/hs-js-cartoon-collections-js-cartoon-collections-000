function dwarfRollCall(dwarves) {

  var RollCallList = []; //RollCallList is the string that will contain the numbered list of dwarf names
  var ListNumber = 0; //ListNumber is the integer that will contain the list number for the pertaining dwarf

  //this for loop will parse through the array dwarves and will create a numbered list of names through concatenation
  for (var d = 0; d < dwarves.length; d++) {
    ListNumber = d + 1; //the index of the array d starts at 0 and will be one number less than the list number
    RollCallList +=  ListNumber + ". " + dwarves[d] + " "; //concatenate the list number and dwarf name to existing list
  }
  return RollCallList //returning a numbered list of dwarf names
}

function summonCaptainPlanet(planeteerCalls){

  var LoudCalls = []; //LoudCallsis the array that will contain the planeteer calls in all cuppercase followed by an exclamation

  //this for loop will parse through the array planeteerCalls and convert each call to all uppercse using the toUpperCase function
  for (var c = 0; c < planeteerCalls.length; c++){
    LoudCalls[c] = planeteerCalls[c].toUpperCase() + "! ";
  }
  return LoudCalls //returning an array of each planeteer call in all upper case followed by an exclamation
}

function longPlaneteerCalls(words) {

  //this for loop parses through the array words and uses the if condition to determine if a word if greater than 4 characters
  for (var w = 0; w < words.length; w++){
    if (words.length > 4)
      return true
  }

  //if the function reaches this point than you can conclude that there are no words greater than 5 characters
  return false
}

function findTheCheese (foods) {

  //this for loop parses through the array foods and uses the if condition to check if each item in the array is a cheese.
  //It checks if it is cheddar,
  //gouda, or camembert. If true it will return the type of cheese it is.
  for (var f = 0; f < foods.length; f++) {
    if (foods[f] == "cheddar") {
      return "cheddar"
    }
    if (foods[f] == "gouda") {
      return "gouda"
    }
    if (foods[f] == "camembert") {
      return "camembert"
    }
  }

  //if there are no items that are of the types of cheese mentioned above in the for loop the function returns "no cjeese!"
  return "no cheese!"
}
