import World from 'world'

export default class Animated {
  constructor (world) {
    this.world = world
    this.elem = document.body.appendChild(document.createElement('div'))
    this.elem.appendChild(world.tableElement())
    this.interval = setInterval(function () { this.tick() }, 1000)
  }

  tick () {
    this.world.turn()
    this.elem.removeChild(this.elem.firstChild)
    this.elem.appendChild(World.tableElement())
  }
}
