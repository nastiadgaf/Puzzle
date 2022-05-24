class Timer extends CheckPuzzle {
  constructor() {
    super();
    this.time = document.querySelector('#time');
    this.modalTime = document.querySelector('#modal-time');
    this.minutes = 1;
    this.seconds = 0;

    this.switchDrapAndDrop(false);
    document.querySelector('[data-start]').onclick = () => {
      this.startTimerWork();
      this.changeButtonsStatus('check-btn', 'start-btn');
      this.switchDrapAndDrop(true);
    };
    document.querySelector('[data-new]').onclick = () => {
      this.resetTimerWork();
      this.changeButtonsStatus('start-btn', 'check-btn');
      this.switchDrapAndDrop(false);
    };
    document.querySelector('[data-check]').onclick = () => {
      this.resetTimerWork();
      this.switchDrapAndDrop(false);
    };
  }

  switchDrapAndDrop = (boolean) => {
    document.querySelectorAll('[data-part]').forEach((part) => {
      part.setAttribute('draggable', boolean);
    });
  };

  changeButtonsStatus = (disableBtn, btn) => {
    this.disableBtn = document.getElementById(disableBtn);
    this.disableBtn.disabled = false;
    this.disableBtn.classList.remove('disable');

    this.btn = document.getElementById(btn);
    this.btn.disabled = true;
    this.btn.classList.add('disable');
  };

  formatNumToTwoCharStr = (num) => (num >= 10 ? num : `0${num}`);

  updateTimeValue() {
    let timeArr = [this.minutes, this.seconds];
    let string = '';
    for (let i = 0; i < timeArr.length; i++) {
      string += this.formatNumToTwoCharStr(timeArr[i]);
      if (i !== timeArr.length - 1) string += ':';
    }

    this.time.innerHTML = string;
    this.modalTime.innerHTML = string;
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
    if (this.time.innerHTML == '00:00') {
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
    this.time.innerHTML = '01:00';
    this.modalTime.innerHTML = '01:00';
    this.minutes = 1;
    this.seconds = 0;
  };
}
