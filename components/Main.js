const time = new Timer();
const modal = new Modal();
const check = new CheckPuzzle();

const newImage = new ImagePlacement();
newImage.fullfillBlockWithImages();
newImage.startDrag();
newImage.fullfillPuzzleBlock();
