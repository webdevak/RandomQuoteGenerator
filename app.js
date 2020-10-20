const div = document.getElementById('container');



const quotes = [
    {
        quote: "“Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.”",
        source: "Michelle Obama"
    },
    {
        quote: "“Impossible is just an opinion.”",
        source: "Paulo Coelho"
    },
    {
       quote:  "“Magic is believing in yourself. If you can make that happen, you can make anything happen.”",
        source: "Johann Wolfgang Von Goethe"
    },
    {
        quote: "“Hustle in silence and let your success make the noise.”",
        source: "Unknown"
    }
   
]


function randomQuote(arr) {
    let random = Math.floor(Math.random() * arr.length);
    let randomQuotes = quotes[random];
    return randomQuotes
}

function printQuote (message) {
    document.write(message);
} 

for (i=0; i < quotes.length; i++) {
    quotes[i].quote[0];
    [i].source[1];
    console.log(quotes)
}