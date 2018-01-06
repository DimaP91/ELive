import world from './actions/World';
import Animated from './actions/Animated';

let animatedWord = (world) => {
    new Animated(world);
  };

animatedWord(world);
