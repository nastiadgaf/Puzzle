class Modal {
  constructor() {
    const checkModalBtn = document.querySelector(
      '[data-check-modal]'
    ) as HTMLButtonElement;

    checkModalBtn.onclick = () => {
      this.openModal('check-modal');
    };

    const closeModalBtn = document.querySelector(
      '[data-close]'
    ) as HTMLButtonElement;

    closeModalBtn.onclick = () => {
      this.closeModal('check-modal');
    };

    const closeResultModalBtn = document.querySelector(
      '[data-close-result]'
    ) as HTMLButtonElement;

    closeResultModalBtn.onclick = () => {
      this.closeModal('result-modal');
    };
  }

  openModal(modalSelector: string) {
    document.getElementById(modalSelector)!.classList.remove('hidden');
  }

  closeModal(modalSelector: string) {
    document.getElementById(modalSelector)!.classList.add('hidden');
  }
}
