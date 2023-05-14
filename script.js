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

// Call the newQuote function when the page loads, to make sure site is not whiteboard with a button when user first open the page
newQuote();

// Resize the background image based on the browser size
//  It took a while to find something that will work. 
//  I understood the concept but still not sure how it works...
window.addEventListener("resize", () => {
    const image = new Image();
    image.src = document.body.style.backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
    const aspectRatio = image.width / image.height;
    if (window.innerWidth / window.innerHeight > aspectRatio) {
      document.body.style.backgroundSize = "auto 100%";
    } else {
      document.body.style.backgroundSize = "100% auto";
    }
  });

  //and now on the phone no way to see the full picture.
  //Add another eventListener for image to resize on page load.
  
window.addEventListener("load", () => {
    const image = new Image();
    image.src = document.body.style.backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
    const aspectRatio = image.width / image.height;
    if (window.innerWidth / window.innerHeight > aspectRatio) {
      document.body.style.backgroundSize = "auto 100%";
    } else {
      document.body.style.backgroundSize = "100% auto";
    }
  });

  //Now it is really weird that you see multiple copies of the picture
  // on the phone mode.
  
  