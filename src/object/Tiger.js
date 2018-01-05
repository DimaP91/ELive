function Tiger(){
    this.energy = 80;
}
Tiger.prototype.act = function(view){
    var space = view.find(" ");
    if (this.energy > 80 && space)
        return {type: "reproduce", direction: space};
    var plant = view.find("O");
    if (plant)
        return {type: "eat", direction: plant};
    if (space)
        return {type: "move", direction: space};
}