import { world } from 'map';

export default class Animated {
  constructor (world) {
    this.world = world;
    this.elem = document.body.appendChild(document.createElement('div'));
    this.elem.appendChild(world.tableElement());
    let self = this; // ????? TO DO
    this.interval = setInterval(function () { self.tick(); }, 1000); // ? don't used
  }

  tick () {
    this.world.turn();
    this.elem.removeChild(this.elem.firstChild);
    this.elem.appendChild(world.tableElement());
  }

}
