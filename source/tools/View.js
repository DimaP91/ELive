import $ from '../helpers/dom';

class View {
  constructor(elem, { design, objects }) {
    this.design = design;
    this.objects = objects;
    this.root = $(elem);
    console.info(objects);
  }

  display() {
    this.root.appendChild(this.createGrid());
  }

  createGrid() {
    const TABLE = $.createElement('table');

    this.design.map((row) => {
      const TR = $.createElement('tr');
      row.split('').map(column => TR.appendChild($.createElement('td', column)));
      return TABLE.appendChild(TR);
    });

    return TABLE;
  }
}

export default View;
