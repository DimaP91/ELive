export default function Animated(world) {
    this.world = world;
    this.elem = document.body.appendChild(document.createElement("div"));
    this.elem.appendChild(world.tableElement());
    var self = this;
    this.interval = setInterval(function() { self.tick(); }, 1000);
}

Animated.prototype.tick = function () {
    this.world.turn();
    this.elem.removeChild(this.elem.firstChild);
    this.elem.appendChild(world.tableElement());
}

