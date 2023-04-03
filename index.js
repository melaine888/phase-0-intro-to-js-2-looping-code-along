// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";
function writeCards(namesArray, eventName){
    const thankYouMessages = [];
  
    for (let i = 0; i < namesArray.length; i++) { 
      const name = namesArray[i];
      const message = `Thank you, ${name}, for the wonderful surprise gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages; 
  }

  function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }
