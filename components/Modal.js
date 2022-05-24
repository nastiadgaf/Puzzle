class Modal {
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
}
