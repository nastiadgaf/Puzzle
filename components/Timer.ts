class Timer extends CheckPuzzle {
  minutes: number;
  seconds: number;
  time: HTMLTimeElement | null;
  modalTime: HTMLTimeElement | null;
  timer: number;
  constructor() {
    super();
    this.time = document.querySelector('#time');
    this.modalTime = document.querySelector('#modal-time');
    this.minutes = 1;
    this.seconds = 0;

    this.switchDrapAndDrop(false);

    const startBtn = document.querySelector(
      '[data-start]'
    ) as HTMLButtonElement;

    startBtn.onclick = () => {
      this.startTimerWork();
      this.changeButtonsStatus('check-btn', 'start-btn');
      this.switchDrapAndDrop(true);
    };

    const newBtn = document.querySelector('[data-new]') as HTMLButtonElement;

    newBtn.onclick = () => {
      this.resetTimerWork();
      this.changeButtonsStatus('start-btn', 'check-btn');
      this.switchDrapAndDrop(false);
    };

    const checkBtn = document.querySelector(
      '[data-check]'
    ) as HTMLButtonElement;

    checkBtn.onclick = () => {
      this.resetTimerWork();
      this.switchDrapAndDrop(false);
    };
  }

  switchDrapAndDrop = (boolean: any) => {
    document.querySelectorAll('[data-part]').forEach((part) => {
      part.setAttribute('draggable', boolean);
    });
  };

  changeButtonsStatus = (
    disableBtnSelector: string,
    enableBtnSelector: string
  ) => {
    const disableBtn = document.getElementById(
      disableBtnSelector
    ) as HTMLButtonElement;
    disableBtn.disabled = false;
    disableBtn.classList.remove('disable');

    const enableBtn = document.getElementById(
      enableBtnSelector
    ) as HTMLButtonElement;
    enableBtn.disabled = true;
    enableBtn.classList.add('disable');
  };

  formatNumToTwoCharStr = (num: number) => (num >= 10 ? num : `0${num}`);

  updateTimeValue() {
    let timeArr: number[] = [this.minutes, this.seconds];
    let string: string = '';
    for (let i: number = 0; i < timeArr.length; i++) {
      string += this.formatNumToTwoCharStr(timeArr[i]);
      if (i !== timeArr.length - 1) string += ':';
    }

    this.time!.innerHTML = string;
    this.modalTime!.innerHTML = string;
  }

  decreaseBySecond = () => {
    if (this.seconds === 0) {
      this.minutes--;
      this.seconds = 59;
    } else {
      this.seconds--;
    }

    this.updateTimeValue();
    this.endTimerWork();
  };

  endTimerWork = () => {
    if (this.time!.innerHTML == '00:00') {
      this.resetTimerWork();
      this.showResult();
      this.switchDrapAndDrop(false);
    }
  };

  startTimerWork() {
    this.timer = setInterval(() => this.decreaseBySecond(), 1000);
  }

  resetTimerWork = () => {
    clearInterval(this.timer);
    this.time!.innerHTML = '01:00';
    this.modalTime!.innerHTML = '01:00';
    this.minutes = 1;
    this.seconds = 0;
  };
}
