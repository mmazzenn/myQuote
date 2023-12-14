var quoteImg = document.getElementById("quoteImg"),
  quoteText = document.getElementById("quoteText"),
  quoteAuthor = document.getElementById("quoteAuthor"),
  prevNum = Math.floor(Math.random() * 10);
quotes = [
  {
    text: "Be yourself; everyone else is already taken.”",
    img: "1.jpg",
    author: "Oscar Wilde",
  },
  {
    text: "So many books, so little time.”",
    img: "2.jpg",
    author: "Frank Zappa ",
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    img: "3.jpg",
    author: " Albert Einstein",
  },
  {
    text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    img: "4.jpg",
    author: "Bernard M. Baruch",
  },
  {
    text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    img: "5.jpg",
    author: "Dr. Seuss",
  },
  {
    text: "You only live once, but if you do it right, once is enough.”",
    img: "6.jpg",
    author: "Mae West",
  },
  {
    text: "Be the change that you wish to see in the world.”",
    img: "7.jpg",
    author: " Mahatma Gandhi",
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.”",
    img: "8.jpg",
    author: "Robert Frost",
  },
  {
    text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
    img: "9.jpg",
    author: "Maya Angelou",
  },
  {
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    img: "10.jpg",
    author: "Ralph Waldo Emerson",
  },
];

// Recursive
function generateQuote() {
  randNum = Math.floor(Math.random() * 10);
  if (randNum === prevNum) {
    generateQuote();
  } else {
    quoteImg.innerHTML = `<img src="assets/quotes/${quotes[randNum].img}" alt="${quotes[randNum].author}" class="quote-img-show" />`;
    quoteText.innerHTML = `<p class="quote-show">${quotes[randNum].text}</p>`;
    quoteAuthor.innerHTML = `<span class="quote-author-show">${quotes[randNum].author}</span>`;
    prevNum = randNum;
  }
}

generateQuote();
