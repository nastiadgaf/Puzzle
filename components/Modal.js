"use strict";
class Modal {
    constructor() {
        const checkModalBtn = document.querySelector('[data-check-modal]');
        checkModalBtn.onclick = () => {
            this.openModal('check-modal');
        };
        const closeModalBtn = document.querySelector('[data-close]');
        closeModalBtn.onclick = () => {
            this.closeModal('check-modal');
        };
        const closeResultModalBtn = document.querySelector('[data-close-result]');
        closeResultModalBtn.onclick = () => {
            this.closeModal('result-modal');
        };
    }
    openModal(modalSelector) {
        document.getElementById(modalSelector).classList.remove('hidden');
    }
    closeModal(modalSelector) {
        document.getElementById(modalSelector).classList.add('hidden');
    }
}
