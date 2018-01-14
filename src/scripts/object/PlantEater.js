export default class PlantEater {
  constructor (energy) {
    this.energy = energy
  }

  act (view) {
    let space = view.find(' ')
    if (this.energy > 60 && space) { return {type: 'reproduce', direction: space} }
    let plant = view.find('*')
    if (plant) { return {type: 'eat', direction: plant} }
    if (space) { return {type: 'move', direction: space} }
  }
}
