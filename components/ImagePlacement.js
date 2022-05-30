"use strict";
class ImagePlacement extends DragAndDrop {
    constructor() {
        super();
        this.clearOldImages = () => {
            document.querySelectorAll('.puzzle-part').forEach((part) => {
                part.remove();
            });
        };
        this.fullfillBlockWithImages = () => {
            this.clearOldImages();
            this.createRandomNumbersArray();
            this.createPartElement();
        };
        this.createPartElement = () => {
            this.numberArray.forEach((num) => {
                this.puzzlePart = document.createElement('img');
                this.puzzlePart.src = `images/${num}.jpg`;
                this.puzzlePart.classList.add('puzzle-part');
                this.puzzlePart.id = num.toString();
                //this.puzzlePart.setAttribute('draggable', false);
                this.puzzlePart.dataset.part = num.toString();
                this.imageBlock.append(this.puzzlePart);
            });
        };
        this.fullfillPuzzleBlock = () => {
            for (let i = 1; i <= 16; i++) {
                this.puzzlePartPlace = document.createElement('div');
                this.puzzlePartPlace.classList.add('puzzle-part');
                this.puzzlePartPlace.dataset.place = i.toString();
                this.puzzleBlock.append(this.puzzlePartPlace);
            }
        };
        this.createRandomNumbersArray = () => {
            this.numberArray = [];
            while (this.numberArray.length < 16) {
                let randomnumber = Math.floor(Math.random() * 16) + 1;
                if (this.numberArray.indexOf(randomnumber) > -1)
                    continue;
                this.numberArray[this.numberArray.length] = randomnumber;
            }
        };
        this.imageBlock = document.querySelector('#puzzle-block_pieces');
        this.puzzleBlock = document.querySelector('#puzzle-block_full');
        document.querySelector('[data-new]').addEventListener('click', () => {
            this.fullfillBlockWithImages();
            this.fullfillPuzzleBlock();
            this.startDrag();
        });
        this.puzzleBlock.ondragover = this.allowDrop;
        this.puzzleBlock.ondrop = this.drop;
    }
}
