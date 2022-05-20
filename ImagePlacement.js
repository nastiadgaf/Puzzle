class ImagePlacement {
  constructor() {
    this.imageBlock = document.querySelector('#puzzle-block_pieces');
    this.usedNumbers = [];
    document.querySelector('[data-new]').addEventListener('click', () => {
      console.log(1);
      this.fullfillBlockWithImages();
    });
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
      this.imageBlock.append(this.puzzlePart);
    });
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
