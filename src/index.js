import Animated from 'actions/animated'
import { map } from 'actions/map'

let animatedWord = (map) => {
  return new Animated(map)
}

animatedWord(map)
