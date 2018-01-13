export default class Tiger {
  constructor (energy) {
    this.energy = energy
  }
  act (view) {
    let space = view.find(' ')
    if (this.energy > 80 && space) { return {type: 'reproduce', direction: space} }
    let plant = view.find('O')
    if (plant) { return {type: 'eat', direction: plant} }
    if (space) { return {type: 'move', direction: space} }
  }
}
