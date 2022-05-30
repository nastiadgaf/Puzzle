"use strict";
class CheckPuzzle extends Modal {
    constructor() {
        super();
        this.showResult = () => {
            const resultText = document.querySelector('[data-result-text]');
            if (!this.checkIsRight()) {
                resultText.textContent = `It's a pity, but you lost`;
            }
            else {
                resultText.textContent = `Woohoo, well done, you did it`;
            }
            this.disableCheckBtn();
            this.openModal('result-modal');
        };
        this.disableCheckBtn = () => {
            const checkBtn = document.querySelector('#check-btn');
            checkBtn.disabled = true;
            checkBtn.classList.add('disable');
        };
        this.checkIsRight = () => {
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
        const checkBtn = document.querySelector('[data-check]');
        checkBtn.addEventListener('click', () => {
            this.showResult();
            this.closeModal('check-modal');
        });
    }
}
