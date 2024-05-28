// Code your solutions in this file
function writeCards(names, event) {
  
    let thankYouMessages = [];
  
  
    for (let i = 0; i < names.length; i++) {
      // Create a thank you message for the current name and event
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  
     
      thankYouMessages.push(message);
    }
  
  
    return thankYouMessages;
  }
  
  
  let names = ["Alice", "Bob", "Charlie"];
  let event = "birthday";
  let messages = writeCards(names, event);
  console.log(messages);


  function countDown(number) {
    // Loop from the provided number down to 0
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
 
  countDown(10);