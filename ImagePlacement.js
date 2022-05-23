class ImagePlacement extends DragAndDrop {
  constructor() {
    super();
    this.imageBlock = document.querySelector('#puzzle-block_pieces');
    this.puzzleBlock = document.querySelector('#puzzle-block_full');

    this.usedNumbers = [];

    document.querySelector('[data-new]').addEventListener('click', () => {
      this.fullfillBlockWithImages();
      this.fullfillPuzzleBlock();
      this.startDrag();
    });

    this.puzzleBlock.ondragover = this.allowDrop;
    this.puzzleBlock.ondrop = this.drop;
  }

  clearOldImages = () => {
    document.querySelectorAll('.puzzle-part').forEach((part) => {
      part.remove();
    });
  };

  fullfillBlockWithImages = () => {
    this.clearOldImages();
    this.createRandomNumbersArray();
    this.numberArray.forEach((num) => {
      this.puzzlePart = document.createElement('img');
      this.puzzlePart.src = `images/${num}.jpg`;
      this.puzzlePart.classList.add('puzzle-part');
      this.puzzlePart.setAttribute('draggable', true);
      this.puzzlePart.id = num;
      this.puzzlePart.dataset.part = num;
      this.imageBlock.append(this.puzzlePart);
    });
  };

  fullfillPuzzleBlock = () => {
    for (let i = 1; i <= 16; i++) {
      this.puzzlePart = document.createElement('div');
      this.puzzlePart.classList.add('puzzle-part');
      this.puzzlePart.dataset.place = i;
      this.puzzleBlock.append(this.puzzlePart);
    }
  };

  createRandomNumbersArray = () => {
    this.numberArray = [];
    while (this.numberArray.length < 16) {
      let randomnumber = Math.floor(Math.random() * 16) + 1;
      if (this.numberArray.indexOf(randomnumber) > -1) continue;
      this.numberArray[this.numberArray.length] = randomnumber;
    }
  };
}

let newImage = new ImagePlacement();
newImage.fullfillBlockWithImages();
newImage.startDrag();
newImage.fullfillPuzzleBlock();
