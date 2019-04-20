class GridFilter {
  constructor(gridOptions) {
    this.gridContainer = document.querySelector(gridOptions.container);
    this.gridItems = gridOptions.gridItems;
    this.elements = this._getElementsFromSelector(gridOptions);

    this.colors = {
      yellow: 'rgb(250, 247, 212)',
      pink: 'rgb(252, 215, 219)',
      brown: 'rgb(229, 210, 195)'
    };
  }

  setupGridItems() {
    this.elements.forEach((element, index) => {
      const { fromRow, toRow, color } = this.gridItems[index];
      element.style.gridRow = `${fromRow} / ${toRow}`;
      element.style.backgroundColor = this.colors[color];
      element.style.display = 'block';
    });

    this._updateContainerRows();
  }

  displayItemsByColor(color) {
    if (color == 'all') {
      this.setupGridItems();
      return;
    }

    const filteredGridItems = this._filterElementsByColor(color);
    const numberOfRows = filteredGridItems.length * 2;
    this._updateContainerRows(numberOfRows);
    this._removeAllGridItems();
    filteredGridItems.forEach(this._placeGridItem.bind(this));
  }

  _updateContainerRows(numberOfRows = 13) {
    this.gridContainer.style.gridTemplateRows = `repeat(${numberOfRows}, 5rem)`;
  }

  _filterElementsByColor(color) {
    return this.elements.filter(
      el => el.style.backgroundColor === this.colors[color]
    );
  }

  _placeGridItem(element, index) {
    const { fromRow, toRow } = this.gridItems[index];
    element.style.gridRow = `${fromRow} / ${toRow}`;
    element.style.display = `block`;
  }

  _removeAllGridItems() {
    this.elements.forEach(el => {
      el.style.display = 'none';
    });
  }

  _getElementsFromSelector({ selector, gridItems }) {
    const elements = gridItems.map((_, index) => {
      return document.querySelector(`${selector}${index + 1}`);
    });

    return elements;
  }
}
