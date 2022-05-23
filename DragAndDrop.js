class DragAndDrop {
  startDrag = () => {
    document.querySelectorAll('.puzzle-part').forEach((part) => {
      part.ondragstart = this.drag;
    });

    //this.checkIsRight();
  };

  // replacePuzzlePartWithWhiteBlock = (elId) => {
  //   console.log(document.getElementById(elId));
  //   this.whiteBlock = document.createElement('div');
  //   this.whiteBlock.classList.add('white-block');
  //   document
  //     .querySelector('#puzzle-block_pieces')
  //     .insertBefore(this.whiteBlock, document.getElementById(elId));
  // };

  drop = (e) => {
    this.block = document.querySelector('#puzzle-block_full');
    if (
      this.block
        .querySelector(`[data-place="${e.target.dataset.place}"]`)
        .hasChildNodes()
    ) {
      return;
    }
    //this.replacePuzzlePartWithWhiteBlock(e.target.dataset.place);
    this.itemId = e.dataTransfer.getData('id');
    e.target.append(document.getElementById(this.itemId));
  };

  drag = (e) => {
    e.dataTransfer.setData('id', e.target.id);
  };

  allowDrop = (e) => {
    e.preventDefault();
  };
}
