"use strict";
class Timer extends CheckPuzzle {
    constructor() {
        super();
        this.switchDrapAndDrop = (boolean) => {
            document.querySelectorAll('[data-part]').forEach((part) => {
                part.setAttribute('draggable', boolean);
            });
        };
        this.changeButtonsStatus = (disableBtnSelector, enableBtnSelector) => {
            const disableBtn = document.getElementById(disableBtnSelector);
            disableBtn.disabled = false;
            disableBtn.classList.remove('disable');
            const enableBtn = document.getElementById(enableBtnSelector);
            enableBtn.disabled = true;
            enableBtn.classList.add('disable');
        };
        this.formatNumToTwoCharStr = (num) => (num >= 10 ? num : `0${num}`);
        this.decreaseBySecond = () => {
            if (this.seconds === 0) {
                this.minutes--;
                this.seconds = 59;
            }
            else {
                this.seconds--;
            }
            this.updateTimeValue();
            this.endTimerWork();
        };
        this.endTimerWork = () => {
            if (this.time.innerHTML == '00:00') {
                this.resetTimerWork();
                this.showResult();
                this.switchDrapAndDrop(false);
            }
        };
        this.resetTimerWork = () => {
            clearInterval(this.timer);
            this.time.innerHTML = '01:00';
            this.modalTime.innerHTML = '01:00';
            this.minutes = 1;
            this.seconds = 0;
        };
        this.time = document.querySelector('#time');
        this.modalTime = document.querySelector('#modal-time');
        this.minutes = 1;
        this.seconds = 0;
        this.switchDrapAndDrop(false);
        const startBtn = document.querySelector('[data-start]');
        startBtn.onclick = () => {
            this.startTimerWork();
            this.changeButtonsStatus('check-btn', 'start-btn');
            this.switchDrapAndDrop(true);
        };
        const newBtn = document.querySelector('[data-new]');
        newBtn.onclick = () => {
            this.resetTimerWork();
            this.changeButtonsStatus('start-btn', 'check-btn');
            this.switchDrapAndDrop(false);
        };
        const checkBtn = document.querySelector('[data-check]');
        checkBtn.onclick = () => {
            this.resetTimerWork();
            this.switchDrapAndDrop(false);
        };
    }
    updateTimeValue() {
        let timeArr = [this.minutes, this.seconds];
        let string = '';
        for (let i = 0; i < timeArr.length; i++) {
            string += this.formatNumToTwoCharStr(timeArr[i]);
            if (i !== timeArr.length - 1)
                string += ':';
        }
        this.time.innerHTML = string;
        this.modalTime.innerHTML = string;
    }
    startTimerWork() {
        this.timer = setInterval(() => this.decreaseBySecond(), 1000);
    }
}
