const quotes = [
  "The only way to do great work is to love what you do.", // Steve Jobs
  "The future belongs to those who believe in the beauty of their dreams.", // Eleanor Roosevelt
  "The best way to predict the future is to create it.", // Peter Drucker
  "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.", // Joel Brown
  "The greatest glory in living lies not in never falling, but in rising every time we fall.", // Nelson Mandela
  "The difference between ordinary and extraordinary is that little extra.", // Jimmy Johnson
  "The mind is everything. What you think you become.", // Buddha
  "The only limit to our realization of tomorrow will be our doubts of today.", // Franklin D. Roosevelt
  "The best time to plant a tree was 20 years ago. The second best time is today.", // Chinese Proverb
  "The most important thing is to never stop questioning.", // Albert Einstein
  "The only person you are destined to become is the person you decide to be.", // Ralph Waldo Emerson
  "The two most important days in your life are the day you are born and the day you find out why.", // Mark Twain
  "The only way to achieve the impossible is to believe it is possible.", // Charles Baudelaire
  "The only thing necessary for the triumph of evil is for good men to do nothing.", // Edmund Burke
  "The greatest weapon against stress is our ability to choose one thought over another.", // William James
  "The most common way people give up their power is by thinking they don't have any.", // Alice Walker
  "The only true wisdom is in knowing you know nothing.", // Socrates
  "The only source of knowledge is experience.", // Albert Einstein
  "The only way to do great work is to love what you do.", // Steve Jobs (Duplicate - intentional for demonstration)
  "The only thing we have to fear is fear itself." // Franklin D. Roosevelt
];

function generateQuote(){
const text = document.getElementById('quote');
const index = Math.floor(Math.random()*quotes.length);
text.textContent = quotes[index];
}

setInterval(generateQuote,3000);


const Colors = ["#FF0000","#FF7F00","#FFFF00","#7F7F00","#90EE90","#E0FFFF","#ADD8E6","#D8BFD8", "#808000","#006400","#008080",];
let currentColorIndex=0;
function changeBG(){
  document.body.style.backgroundColor=Colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % Colors.length;
}
setInterval(changeBG,3000);
currentColorIndex = (currentColorIndex + 1) % Colors.length;
