const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const copyBtn = document.getElementById("copy");
const tweetBtn = document.getElementById("tweet");


async function generateQuote() {
    const quoteResponse = await fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random");
    const quoteData = await quoteResponse.json();
    quoteText.innerHTML = quoteData.data.content;
    authorText.innerHTML = `- ${quoteData.data.author}`;
}

function copyQuote() {
    navigator.clipboard.writeText(quoteText.innerHTML);
    alert("Quote copied to clipboard");
}

function shareOnTwitter() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText.innerHTML + " " + authorText.innerHTML)}`;
    window.open(twitterUrl, "_blank");
}

newQuoteBtn.addEventListener("click", generateQuote);
copyBtn.addEventListener("click", copyQuote);
tweetBtn.addEventListener("click", shareOnTwitter);



generateQuote();