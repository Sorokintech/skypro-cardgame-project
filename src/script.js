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
    gamePageLogic(`easy-one`);
  } else if (chosenDifficulty === '2') {
    app.appendChild(templateEngine(templateMediumMode));
    gamePageLogic(`easy-one`);
  } else if (chosenDifficulty === '3') {
    app.appendChild(templateEngine(templateHardMode));
    gamePageLogic(`hard-one`);
  } else {
    alert('Выберите сложность');
    location.reload(true);
  }
});
function toggle() {
  app.classList.toggle('active');
}
function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
let matchCard = '';
const cardsSRC = `./src/cards/`;
const cards = {
  1: `${cardsSRC}/clubs/jack.png`,
  2: `${cardsSRC}/clubs/queen.png`,
  3: `${cardsSRC}/clubs/king.png`,
  4: `${cardsSRC}/clubs/ace.png`,
  5: `${cardsSRC}/clubs/6.png`,
  6: `${cardsSRC}/clubs/7.png`,
  7: `${cardsSRC}/clubs/8.png`,
  8: `${cardsSRC}/clubs/9.png`,
  9: `${cardsSRC}/clubs/10.png`,
  10: `${cardsSRC}/hearts/jack.png`,
  11: `${cardsSRC}/hearts/queen.png`,
  12: `${cardsSRC}/hearts/king.png`,
  13: `${cardsSRC}/hearts/ace.png`,
  14: `${cardsSRC}/hearts/6.png`,
  15: `${cardsSRC}/hearts/7.png`,
  16: `${cardsSRC}/hearts/8.png`,
  17: `${cardsSRC}/hearts/9.png`,
  18: `${cardsSRC}/hearts/10.png`,
  19: `${cardsSRC}/spades/king.png`,
  20: `${cardsSRC}/spades/ace.png`,
  21: `${cardsSRC}/spades/jack.png`,
  22: `${cardsSRC}/spades/queen.png`,
  23: `${cardsSRC}/spades/6.png`,
  24: `${cardsSRC}/spades/7.png`,
  25: `${cardsSRC}/spades/8.png`,
  26: `${cardsSRC}/spades/9.png`,
  27: `${cardsSRC}/spades/10.png`,
  28: `${cardsSRC}/diamonds/ace.png`,
  29: `${cardsSRC}/diamonds/jack.png`,
  30: `${cardsSRC}/diamonds/queen.png`,
  31: `${cardsSRC}/diamonds/king.png`,
  32: `${cardsSRC}/diamonds/6.png`,
  33: `${cardsSRC}/diamonds/7.png`,
  34: `${cardsSRC}/diamonds/8.png`,
  35: `${cardsSRC}/diamonds/9.png`,
  36: `${cardsSRC}/diamonds/10.png`,
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

function gamePageLogic(className) {
  const cardsRender = document.querySelector('.container-cards');
  const currentSecondTimer = document.querySelector('.timer-sec');
  const currentMinuteTimer = document.querySelector('.timer-min');
  const btn = document.querySelector('.start-button');
  cardsRender.classList.add(className);
  app.classList.add('game-page-height');
  setTimeout(mainGameLogic, 3000);
  gameTimer(currentSecondTimer, currentMinuteTimer);
  btn.addEventListener('click', (event) => {
    document.location.reload();
  });
}
function mainGameLogic() {
  let count = 0;
  let images = document.querySelectorAll('.img');
  let currentDiff = images.length;
  images.forEach((e) => {
    let currentSrc = e.src;
    e.src = `./src/cards/back-card.png`;
    e.addEventListener('click', (event) => {
      e.src = currentSrc;
      count += 1;

      if (matchCard === '') {
        matchCard = e.src;
        clearInterval(gameTimer.counting);
      } else if (matchCard === e.src) {
        matchCard = '';

        if (count === currentDiff) {
          stopTime();
          toggle();
          matchCard = '';
          document.body.appendChild(templateEngine(templateWin));

          const popUp = document.querySelector('.container');
          const popBtn = document.querySelector('.pop-up-btn');
          const popUpTimer = document.querySelector('.pop-up-timer');
          const currentSecondTimer = document.querySelector('.timer-sec');
          const currentMinuteTimer = document.querySelector('.timer-min');

          popUp.classList.add('pop-up');
          insertAfter(popUp, app);

          popUpTimer.textContent =
            currentMinuteTimer.textContent +
            '.' +
            currentSecondTimer.textContent;

          popBtn.addEventListener('click', (event) => {
            document.location.reload();
          });
        }
      } else if (matchCard !== e.src) {
        toggle();
        stopTime();
        matchCard = '';
        document.body.appendChild(templateEngine(templateLose));

        const popUp = document.querySelector('.container');
        const popUpTimer = document.querySelector('.pop-up-timer');
        const currentSecondTimer = document.querySelector('.timer-sec');
        const currentMinuteTimer = document.querySelector('.timer-min');
        const popBtn = document.querySelector('.pop-up-btn');

        popUp.classList.add('pop-up');
        popUpTimer.textContent =
          currentMinuteTimer.textContent + '.' + currentSecondTimer.textContent;
        insertAfter(popUp, app);

        popBtn.addEventListener('click', (event) => {
          document.location.reload();
        });
      }
    });
  });
}

// just a comment
