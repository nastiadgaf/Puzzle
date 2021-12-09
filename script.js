const modalTrigger = document.querySelectorAll('[data-modal]')
const modal = document.querySelector('.modal')
const checkButton = document.querySelector('[data-check]')
const closeButton = document.querySelector('[data-close')

checkButton.disable = true;

class Puzzle{
    openModal(){
        modal.style.display = "block"
    }

    closeModal(){
        modal.style.display = "none"
    }

}

const puzzleGame = new Puzzle();

modalTrigger.forEach(btn => {
    btn.addEventListener('click', puzzleGame.openModal);
});

closeButton.addEventListener('click', puzzleGame.closeModal)
