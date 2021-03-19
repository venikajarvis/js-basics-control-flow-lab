function scuberGreetingForFeet(rideLength){
  // rides <=400 ft = "This one is on me!"
  let result;
  if (rideLength <= 400) {
    result = "This one is on me!";
  // rides >2000 ft = "I will gladly take your thirty bucks."
  } else if ((rideLength > 2000) && (rideLength < 2501)) {
    result = "I will gladly take your thirty bucks.";
  // rides >2500 ft = "No can do."
  } else if (rideLength >= 2501) {
    result = "No can do."
  }
  return result;
}

// we have a function that we are calling ternaryCheckCity, where we want the person calling the function to define city, hence putting is as the arguement
function ternaryCheckCity(city){
  let responseToCustomer = city === "NYC" ? "Ok, sounds good." : "No go.";
  return responseToCustomer;
}

// Longer way
// // we define the variable that will be our response to the customer 
  // let responseToCustomer;
  // // When NYC is entered, it returns: "Ok, sounds good." BUT anything else entered, returns: "No go."
  // city === "NYC" ? (responseToCustomer = "Ok, sounds good.") : (responseToCustomer = "No go.")
  // return responseToCustomer;

function switchOnCharmFromTip(typeOfTip) {
  let response;
  switch (typeOfTip) {
  case 'generous':
    response = 'Thank you so much.';
    break;
  case 'not as generous':
    response = 'Thank you.';
    break;
  default:
    response = 'Bye.'
    break;
}
return response;
}