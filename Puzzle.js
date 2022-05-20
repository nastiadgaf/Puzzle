const modalTrigger = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');
const checkButton = document.querySelector('[data-check]');
const closeButton = document.querySelector('[data-close]');
const time = document.querySelector('.time');
//checkButton.disable = true;

class Puzzle {
  // constructor(){

  // }
  openModal() {
    modal.classList.toggle('hidden');
  }

  closeModal() {
    modal.classList.toggle('hidden');
  }

  closeModalByOutClick() {
    window.addEventListener('click', (e) => {
      if (e.target.classList == 'modal') {
        this.closeModal();
      }
    });
  }

  addTimeToModal() {
    let remainingTime = document.createElement('p');
    remainingTime.classList.add('remaining-time');
    remainingTime.textContent = time.textContent;
    const modalText = document.querySelector('.modal__text');

    modalText.append(remainingTime);
  }
}

const puzzleGame = new Puzzle();
puzzleGame.closeModalByOutClick();
checkButton.addEventListener('click', () => {
  puzzleGame.openModal();
});
closeButton.addEventListener('click', puzzleGame.closeModal);
puzzleGame.addTimeToModal();
