//checkButton.disable = true;

class Puzzle {
  constructor() {
    document.querySelector('[data-check-modal]').onclick = () => {
      this.openModal('check-modal');
    };

    document.querySelector('[data-close]').onclick = () => {
      this.closeModal('check-modal');
    };

    document.querySelector('[data-close-result]').onclick = () => {
      this.closeModal('result-modal');
    };
  }
  openModal(modal) {
    document.getElementById(modal).classList.remove('hidden');
  }

  closeModal(modal) {
    document.getElementById(modal).classList.add('hidden');
  }

  // closeModalByOutClick() {
  //   window.addEventListener('click', (e) => {
  //     if (e.target.classList == 'modal') {
  //       this.closeModal();
  //     }
  //   });
  // }

  // addTimeToModal() {
  //   let remainingTime = document.createElement('p');
  //   remainingTime.classList.add('remaining-time');
  //   remainingTime.textContent = time.textContent;
  //   const modalText = document.querySelector('.modal__text');

  //   modalText.append(remainingTime);
  // }
}

const puzzleGame = new Puzzle();
