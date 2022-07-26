document.addEventListener("DOMContentLoaded", function(event) {
    console.log('Content loaded');
    window.application.renderBlock('startPage', app);
    window.application.renderScreen('startPage', app);
   });
const app = document.querySelector('.app');