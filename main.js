const multimediaOptions = {
  selector: '#dashboard_video',
  playOnCoords: { x: 0, y: 1208 }
};

const gridItems = [
  { fromRow: 1, toRow: 6, color: 'yellow' },
  { fromRow: 1, toRow: 5, color: 'pink' },
  { fromRow: 1, toRow: 6, color: 'yellow' },
  { fromRow: 1, toRow: 5, color: 'brown' },
  { fromRow: 6, toRow: 10, color: 'pink' },
  { fromRow: 5, toRow: 9, color: 'brown' },
  { fromRow: 6, toRow: 10, color: 'yellow' },
  { fromRow: 5, toRow: 9, color: 'pink' },
  { fromRow: 10, toRow: -1, color: 'brown' },
  { fromRow: 9, toRow: 13, color: 'yellow' },
  { fromRow: 10, toRow: -1, color: 'brown' },
  { fromRow: 9, toRow: 13, color: 'yellow' }
];

const gridOptions = {
  container: '.grid__container',
  selector: '#grid__item--',
  gridItems
};

function changeCurrentActiveItem(ev) {
  document
    .querySelector('.grid__option--active')
    .classList.remove('grid__option--active');

  ev.target.classList.add('grid__option--active');
}

window.onload = function() {
  const video = new DynamicPlayer(multimediaOptions);
  video.init();

  const grid = new GridFilter(gridOptions);
  grid.setupGridItems();

  document.querySelectorAll('.grid__option').forEach(el => {
    el.addEventListener('click', e => {
      const color = e.srcElement.innerText.toLowerCase();

      changeCurrentActiveItem(e);
      grid.displayItemsByColor(color);
    });
  });
};
