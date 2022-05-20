class DragAndDrop {
  startDrag = () => {
    document.querySelectorAll('.puzzle-part').forEach((part) => {
      part.ondragstart = this.drag;
    });

    this.checkIsRight();
  };

  drop = (e) => {
    this.block = document.querySelector('#puzzle-block_full');
    if (
      this.block
        .querySelector(`[data-place="${e.target.dataset.place}"]`)
        .hasChildNodes()
    ) {
      return;
    }

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
