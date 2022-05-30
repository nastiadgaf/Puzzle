class CheckPuzzle extends Modal {
  constructor() {
    super();

    const checkBtn = document.querySelector(
      '[data-check]'
    ) as HTMLButtonElement;

    checkBtn.addEventListener('click', () => {
      this.showResult();
      this.closeModal('check-modal');
    });
  }

  showResult = () => {
    const resultText = document.querySelector(
      '[data-result-text]'
    ) as HTMLParagraphElement;
    if (!this.checkIsRight()) {
      resultText.textContent = `It's a pity, but you lost`;
    } else {
      resultText.textContent = `Woohoo, well done, you did it`;
    }
    this.disableCheckBtn();
    this.openModal('result-modal');
  };

  disableCheckBtn = () => {
    const checkBtn = document.querySelector('#check-btn') as HTMLButtonElement;
    checkBtn.disabled = true;
    checkBtn.classList.add('disable');
  };

  checkIsRight = () => {
    let isRight: boolean = true;
    document.querySelectorAll('[data-place]').forEach((block: any) => {
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
