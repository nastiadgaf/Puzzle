"use strict";
class DragAndDrop {
    constructor() {
        this.startDrag = () => {
            document.querySelectorAll('.puzzle-part').forEach((part) => {
                part.ondragstart = this.drag;
            });
        };
        // replacePuzzlePartWithWhiteBlock = (elId) => {
        //   console.log(document.getElementById(elId));
        //   this.whiteBlock = document.createElement('div');
        //   this.whiteBlock.classList.add('white-block');
        //   document
        //     .querySelector('#puzzle-block_pieces')
        //     .insertBefore(this.whiteBlock, document.getElementById(elId));
        // };
        this.drop = (e) => {
            console.log(typeof e);
            let block = document.querySelector('#puzzle-block_full');
            console.log(block.querySelector(`[data-place="${e.target.dataset.place}"]`));
            if (block
                .querySelector(`[data-place="${e.target.dataset.place}"]`)
                .hasChildNodes()) {
                return;
            }
            //this.replacePuzzlePartWithWhiteBlock(e.target.dataset.place);
            let itemId = e.dataTransfer.getData('id');
            e.target.append(document.getElementById(itemId));
        };
        this.drag = (e) => {
            e.dataTransfer.setData('id', e.target.id);
        };
        this.allowDrop = (e) => {
            e.preventDefault();
        };
    }
}
