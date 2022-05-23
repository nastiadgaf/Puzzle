class CheckPuzzle extends Puzzle {
  constructor() {
    super();

    document.querySelector('[data-check]').addEventListener('click', () => {
      this.showResult();
      this.closeModal('check-modal');
    });
  }

  showResult = () => {
    this.resultText = document.querySelector('[data-result-text]');
    console.log(this.checkIsRight());
    if (!this.checkIsRight()) {
      this.resultText.textContent = `It's a pity, but you lost`;
    } else {
      this.resultText.textContent = `Woohoo, well done, you did it`;
    }
    this.openModal('result-modal');
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

let check = new CheckPuzzle();
