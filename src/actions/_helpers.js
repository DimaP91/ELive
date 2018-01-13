import Vector from './vector'

export const directions = {
  n:  new Vector(0, -1),
  ne: new Vector(1, -1),
  e:  new Vector(1,  0),
  se: new Vector(1,  1),
  s:  new Vector(0,  1),
  sw: new Vector(-1,  1),
  w:  new Vector(-1,  0),
  nw: new Vector(-1, -1),
};

export function randomElement (array) {
  return array[Math.floor(Math.random() * array.length)]
}

export function elementFromChar (legend, ch) {
  if (ch === ' ') {
    return null
  }
  let element = new legend[ch]()
  element.originChar = ch
  return element
}

export function charFromElement (element) {
  if (element === null) {
    return ' '
  } else {
    return element.originChar
  }
}
