class CheckPuzzle extends Modal {
  constructor() {
    super();

    document.querySelector('[data-check]').addEventListener('click', () => {
      this.showResult();
      this.closeModal('check-modal');
    });
  }

  showResult = () => {
    this.resultText = document.querySelector('[data-result-text]');
    if (!this.checkIsRight()) {
      this.resultText.textContent = `It's a pity, but you lost`;
    } else {
      this.resultText.textContent = `Woohoo, well done, you did it`;
    }
    this.disableCheckBtn();
    this.openModal('result-modal');
  };

  disableCheckBtn = () => {
    this.checkBtn = document.querySelector('#check-btn');
    this.checkBtn.disabled = true;
    this.checkBtn.classList.add('disable');
  };

  checkIsRight = () => {
    let isRight = true;
    document.querySelectorAll('[data-place]').forEach((block) => {
      if (!block.firstChild) {
        isRight = false;
        return;
      }
      if (block.dataset.place !== block.firstChild.dataset.part) {
        isRight = false;
      }
    });
    return isRight;
  };
}
