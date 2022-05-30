'use strict';
new Timer();
new Modal();
new CheckPuzzle();

const newImage: ImagePlacement = new ImagePlacement();
newImage.fullfillBlockWithImages();
newImage.startDrag();
newImage.fullfillPuzzleBlock();
