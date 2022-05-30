class DragAndDrop {
  startDrag = () => {
    document.querySelectorAll('.puzzle-part').forEach((part: any) => {
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

  drop = (e: any) => {
    console.log(typeof e);
    let block: any = document.querySelector('#puzzle-block_full');
    console.log(
      block.querySelector(`[data-place="${e.target.dataset.place}"]`)
    );
    if (
      block
        .querySelector(`[data-place="${e.target.dataset.place}"]`)
        .hasChildNodes()
    ) {
      return;
    }
    //this.replacePuzzlePartWithWhiteBlock(e.target.dataset.place);
    let itemId: string = e.dataTransfer.getData('id');
    e.target.append(document.getElementById(itemId));
  };

  drag = (e: any) => {
    e.dataTransfer.setData('id', e.target.id);
  };

  allowDrop = (e: Event) => {
    e.preventDefault();
  };
}
