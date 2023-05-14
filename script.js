// Get a reference to the HTML button element
const button = document.getElementById("new-quote-button");

// Add an event listener to the button
button.addEventListener("click", newQuote);

// Define the newQuote function and fetch to API
function newQuote() {
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => {
        const quote = data.content;
        const author = data.author;
  
        document.getElementById("quote").textContent = quote;
        document.getElementById("author").textContent = author;
  
        //generate a random number between 1 and 12 (inclusive) 
        const randomImage = Math.floor(Math.random() * 12) + 1;
        //connect the randomImage to an image(1-12).jpg from src folder to the body element in HTML for the background
        document.body.style.backgroundImage = `url('src/picture${randomImage}.jpg')`;
      })
      .catch(error => console.error(error));
  }

  
  