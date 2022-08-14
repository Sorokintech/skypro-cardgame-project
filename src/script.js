const app = document.querySelector('.app');
app.appendChild(templateEngine(templateStartPage));
const difficultyButtons = document.querySelectorAll('.difficulty-button');
const startButton = document.querySelector('.start-button');
let chosenDifficulty = '';
const difficultyContainer = document.querySelector('.difficulty-container');
let currentCardsEasy = [];
let currentCardsMedium = [];
let currentCardsHard = [];

difficultyButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    chosenDifficulty = button.textContent;
    event.preventDefault();
    if (!button.classList.contains('diff-button-active')) {
      difficultyButtons.forEach((button) => {
        button.classList.remove('diff-button-active');
      });
      button.classList.add('diff-button-active');
    }
  });
});
startButton.addEventListener('click', (event) => {
  event.preventDefault();
  app.classList.remove('center');
  app.textContent = '';
  if (chosenDifficulty === '1') {
    app.appendChild(templateEngine(templateEasyMode));
    const cardsRender = document.querySelector('.container-cards');
    cardsRender.classList.add('easy-one');
    app.style.height = '100vh';
    setTimeout(cardFlip, 2000);
  } else if (chosenDifficulty === '2') {
    app.appendChild(templateEngine(templateMediumMode));
    const cardsRender = document.querySelector('.container-cards');
    cardsRender.classList.add('easy-one');
    app.style.height = '100vh';
    setTimeout(cardFlip, 2000);
  } else if (chosenDifficulty === '3') {
    app.appendChild(templateEngine(templateHardMode));
    const cardsRender = document.querySelector('.container-cards');
    cardsRender.classList.add('hard-one');
    app.style.height = '100vh';
    setTimeout(cardFlip, 2000);
  } else {
    alert('Выберите сложность');
    location.reload(true);
  }
});

let matchCard = '';
function cardFlip() {
  let images = document.querySelectorAll('.img');
  images.forEach((e) => {
    let currentSrc = e.src;
    e.src = `./src/cards/back-card.png`;
    e.addEventListener('click', (event) => {
      e.src = currentSrc;
      if (matchCard === '') {
        matchCard = e.src;
      } else if (matchCard === e.src) {
        alert('Вы победили');
        matchCard = '';
      } else if (matchCard !== e.src) {
        alert('Вы проиграли');
        matchCard = '';
      }
    });
  });
}
const cards = {
  1: './src/cards/clubs/jack.png',
  2: './src/cards/clubs/queen.png',
  3: './src/cards/clubs/king.png',
  4: './src/cards/clubs/ace.png',
  5: './src/cards/clubs/6.png',
  6: './src/cards/clubs/7.png',
  7: './src/cards/clubs/8.png',
  8: './src/cards/clubs/9.png',
  9: './src/cards/clubs/10.png',
  10: './src/cards/hearts/jack.png',
  11: './src/cards/hearts/queen.png',
  12: './src/cards/hearts/king.png',
  13: './src/cards/hearts/ace.png',
  14: './src/cards/hearts/6.png',
  15: './src/cards/hearts/7.png',
  16: './src/cards/hearts/8.png',
  17: './src/cards/hearts/9.png',
  18: './src/cards/hearts/10.png',
  19: './src/cards/spades/king.png',
  20: './src/cards/spades/ace.png',
  21: './src/cards/spades/jack.png',
  22: './src/cards/spades/queen.png',
  23: './src/cards/spades/6.png',
  24: './src/cards/spades/7.png',
  25: './src/cards/spades/8.png',
  26: './src/cards/spades/9.png',
  27: './src/cards/spades/10.png',
  28: './src/cards/diamonds/ace.png',
  29: './src/cards/diamonds/jack.png',
  30: './src/cards/diamonds/queen.png',
  31: './src/cards/diamonds/king.png',
  32: './src/cards/diamonds/6.png',
  33: './src/cards/diamonds/7.png',
  34: './src/cards/diamonds/8.png',
  35: './src/cards/diamonds/9.png',
  36: './src/cards/diamonds/10.png',
};

function mixingEasy() {
  for (let i = 0; i < 3; i++) {
    currentCardsEasy.push(cards[randomNumber(1, 36)]);
  }
  currentCardsEasy = currentCardsEasy.concat(currentCardsEasy);
  shuffle(currentCardsEasy);
}
function mixingMedium() {
  for (let i = 0; i < 6; i++) {
    currentCardsMedium.push(cards[randomNumber(1, 36)]);
  }
  currentCardsMedium = currentCardsMedium.concat(currentCardsMedium);
  shuffle(currentCardsMedium);
}
function mixingHard() {
  for (let i = 0; i < 9; i++) {
    currentCardsHard.push(cards[randomNumber(1, 36)]);
  }
  currentCardsHard = currentCardsHard.concat(currentCardsHard);
  shuffle(currentCardsHard);
}
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

mixingEasy();
mixingMedium();
mixingHard();
