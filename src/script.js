const app = document.querySelector('.app');
app.appendChild(templateEngine(templateStartPage));
const difficultyButtons = document.querySelectorAll('.difficulty-button');
const startButton = document.querySelector('.start-button');
let chosenDifficulty = '';


difficultyButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        chosenDifficulty = button.textContent;
        event.preventDefault();
        if (!button.classList.contains('diff-button-active')) {
            difficultyButtons.forEach(button => {
                button.classList.remove('diff-button-active');
            });
            button.classList.add('diff-button-active');
        }
    })
});



startButton.addEventListener('click', (event) => {
    event.preventDefault();
    switch(chosenDifficulty) {
        case '1' : 
        app.textContent = '';
        app.appendChild(templateEngine(templateEasyMode));
        break;
        case '2':
        app.textContent = '';
        app.appendChild(templateEngine(templateMediumMode));
        break;
        case '3':
        app.textContent = '';
        app.appendChild(templateEngine(templateHardMode));
        break;
        default:
        alert('Сложность не выбрана');
    }
})
