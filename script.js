// Get a reference to the HTML button element
const button = document.getElementById("new-quote-button");

// Add an event listener to the button
button.addEventListener("click", newQuote);

function newQuote() {
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => {
        const quote = data.content;
        const author = data.author;
  
        document.getElementById("quote").textContent = quote;
        document.getElementById("author").textContent = author;
  
      })
      .catch(error => console.error(error));
  }
  