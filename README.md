# phase-1-project-quote-generator

# Random Quote Generator

This is a simple web app that generates a random quote and displays it on the screen along with the author's name. It also changes the background image of the page with every new quote generated.

## Technologies Used

The app is built using HTML, CSS, and JavaScript. It also uses the [Axios library](https://github.com/axios/axios) for making HTTP requests.

## Features

- Clicking the "Generate Quote" button will display a new quote and author.
- Clicking the "Copy Quote" button will copy the current quote and author to the clipboard.
- The background image of the page changes with every new quote generated.
- The app is responsive and adjusts the background image size based on the screen size.
- If the API request fails, an error message will be displayed in the console.

## How It Works

- When the "Generate Quote" button is clicked, the `newQuote` function is called.
- The `newQuote` function makes an HTTP request to the [quotable.io](https://api.quotable.io/) API to get a random quote and author.
- The quote and author are then displayed on the screen.
- A random image is selected and set as the background image of the page.
- When the "Copy Quote" button is clicked, the `copyQuote` function is called which copies the current quote and author to the clipboard.
- The `resize` event listener is used to adjust the size of the background image based on the screen size.
- If there is an error with the API request, an error message will be logged to the console.

## Usage

To use the app, simply open the `index.html` file in a web browser. Click the "Generate Quote" button to get a new quote and author. Click the "Copy Quote" button to copy the current quote and author to the clipboard.