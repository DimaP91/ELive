export default class Animated {
  constructor (world) {
    this.world = world
    this.elem = document.body.appendChild(document.createElement('div'))
    this.elem.appendChild(world.tableElement())
    this._start = false
  }
  start () {
    if (!this._start) {
      setInterval(() => {
        this.world.turn()
        this.elem.removeChild(this.elem.firstChild)
        this.elem.appendChild(this.world.tableElement())
      }, 1000)
      this._start = true
    } else {
      console.error('Animated is started')
    }
  }
}
