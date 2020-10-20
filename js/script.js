/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat



  const div = document.getElementById("quote-box");
/*** 
 * `quotes` array 
***/

const quotes = [
  {
      quote: "Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.",
      source: "Michelle Obama",
      citation: 'Pintrest',
      year: '2017',
      theme: "Motivational"
  },
  {
      quote: "Impossible is just an opinion.",
      source: "Paulo Coelho",
      citation: 'Pintrest',
      year: '',
      theme: "Motivational"
  },
  {
     quote:  "Magic is believing in yourself. If you can make that happen, you can make anything happen.",
      source: "Johann Wolfgang Von Goethe",
      citation: 'Quote Fancy',
      year: '',
      theme: "Motivational"
  },
  {
      quote: "Hustle in silence and let your success make the noise.",
      source: "Unknown",
      citation: 'Pintrest',
      year: '',
      theme: "Motivational"
  },
  {
      quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
      source: "Patrick McKenzie",
      citation: "Twitter",
      year: "2016",
      theme: "Motivational"
  }
]

/*** 
 * `Colors` array 
***/
  const arrayOfColors = ['#ff35ff','#ae56ee', '#000000', 'rgb(58, 193, 98)']

/***
 * `getRandomQuote` function
***/

function getRandomQuote(arr) {
  let random = Math.floor(Math.random() * arr.length);
  let randomQuotes = quotes[random];
  return randomQuotes
}


/***
 * `getRandomColors` function
***/

function getRandomColor(arr) {
  let random = Math.floor(Math.random() * arr.length);
  let randomColors = arrayOfColors[random];
  return  randomColors
}





/***
 * `printQuote` function
***/
const citation = document.querySelector('.citation');
const year = document.querySelector('.year');
const theme = document.querySelector('.theme');

// Prints a new quote and background-color every 10 seconds
let timer = setInterval(printQuote, 10000)
const bodyBg = document.querySelector('body')

function printQuote (message) {
  let randomQuote = (getRandomQuote(quotes));
  let htmlString = `
                  <p class="quote"> ${randomQuote.quote} </p>
                    <p class="source">${randomQuote.source}`
                   
                if (citation || year || theme) { 
                  htmlString +=`<span class="citation">${randomQuote.citation}</span> `
             
                  htmlString += `<span class="year">${randomQuote.year}</span> `  
             
                  htmlString += `<span class="theme">${randomQuote.theme}</span> </p>`
                }
                
    document.getElementById('quote-box').innerHTML = htmlString;
    bodyBg.style.backgroundColor = (getRandomColor(arrayOfColors)); //Prints out random background-color
} 



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

const loadQuote = document.getElementById('load-quote');

loadQuote.addEventListener('click', (e) =>printQuote(), false)



// document.getElementById('load-quote').addEventListener("click", printQuote(), false);