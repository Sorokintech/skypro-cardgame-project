function renderStartPageHTML(container) {
    const mainContainer = document.createElement('div');
        mainContainer.classList.add('container');
    const containerHeader = document.createElement('h1');
        containerHeader.classList.add('container-header');
    const chooseDifficultyContainer = document.createElement('div');
        chooseDifficultyContainer.classList.add('difficulty-container');
    const firstDifficultyButton = document.createElement('button');
        firstDifficultyButton.classList.add('difficulty-button');
    const secondDifficultyButton = document.createElement('button');
        secondDifficultyButton.classList.add('difficulty-button');
    const thirdDifficultyButton = document.createElement('button');
        thirdDifficultyButton.classList.add('difficulty-button');
    const startButton = document.createElement('button');
        startButton.classList.add('start-button');

    container.appendChild(mainContainer);
    mainContainer.appendChild(containerHeader);
    mainContainer.appendChild(chooseDifficultyContainer);
    chooseDifficultyContainer.appendChild(firstDifficultyButton);
    chooseDifficultyContainer.appendChild(secondDifficultyButton);
    chooseDifficultyContainer.appendChild(thirdDifficultyButton);
    mainContainer.appendChild(startButton);
  };
  function renderStartPageContent(container) {
    const containerHeader = container.querySelector('.container-header');
    containerHeader.textContent = 'Выбери сложность';
    const difficultyButtons = container.querySelectorAll('.difficulty-button');
    console.log(difficultyButtons);
        difficultyButtons[0].textContent = '1';
        difficultyButtons[1].textContent = '2';
        difficultyButtons[2].textContent = '3';
    const startButton = container.querySelector('.start-button');
    console.log(startButton);
    startButton.textContent = 'Старт';  
}
window.application.blocks['startPage'] = renderStartPageHTML; 
window.application.screens['startPage'] = renderStartPageContent;
