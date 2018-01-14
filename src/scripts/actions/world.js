import Grid from './grid'
import View from './view'
import Vector from './vector'
import { elementFromChar, charFromElement, directions } from './_helpers'
import actionTypes from './action'

export default class World {
  constructor (map, legend) {
    let grid = new Grid(map[0].length, map.length)
    this.grid = grid
    this.legend = legend
    map.forEach((line, y) => {
      for (let x = 0; x < line.length; x++) {
        grid.set(new Vector(x, y), elementFromChar(legend, line[x]))
      }
    })
  }

  tableElement () {
    let table = document.createElement('table')
    for (let y = 0; y < this.grid.height; y++) {
      let tr = document.createElement('tr')
      for (let x = 0; x < this.grid.width; x++) {
        let element = this.grid.get(new Vector(x, y))
        let legend = charFromElement(element)
        let td = document.createElement('td')
        switch (legend) {
          case '#':
            td.style.backgroundColor = 'black'
            break
          case '@':
            td.style.backgroundColor = 'red'
            break
          case '*':
            td.style.backgroundColor = 'green'
            break
          case 'O':
            td.style.backgroundColor = 'blue'
            break
        }
        tr.appendChild(td)
      }

      table.appendChild(tr)
    }

    return table
  }

  turn () {
    let acted = []
    this.grid.forEach((critter, vector) => {
      if (critter.act && acted.indexOf(critter) === -1) {
        acted.push(critter)
        this.letAct(critter, vector)
      }
    }, this)
  }

  letAct (critter, vector) {
    let action = critter.act(new View(this, vector))
    let handled = action &&
      action.type in actionTypes &&
      actionTypes[action.type].call(this, critter,
        vector, action)
    if (!handled) {
      critter.energy -= 0.2
      if (critter.energy <= 0) { this.grid.set(vector, null) }
    }
  }

  checkDestination (action, vector) {
    if (directions.hasOwnProperty(action.direction)) {
      let dest = vector.plus(directions[action.direction])
      if (this.grid.isInside(dest)) {
        return dest
      }
    }
  }
}
