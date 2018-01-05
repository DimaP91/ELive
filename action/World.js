function Word(map, legend) {
    var grid = new Grid(map[0].length, map.length);
    this.grid = grid;
    this.legend = legend;

    map.forEach(function(line,y) {
        for (var x = 0; x < line.length; x++) {
            grid.set(new Vector(x,y), elementFromChar(legend, line[x]));
        }
    });
}
Word.prototype.tableElement = function(){
    var table = document.createElement('table');
    for (var y = 0; y < this.grid.height; y++) {
        var tr = document.createElement('tr');
        for (var x = 0; x < this.grid.width; x++) {
            var element = this.grid.get(new Vector(x,y));
            var legend = charFromElement(element);
            var td = document.createElement('td');


            if(legend === '#'){
                td.style.backgroundColor = 'black';
            }
            if(legend === '@'){
                td.style.backgroundColor = 'red';
            }
            if(legend === '*'){
                td.style.backgroundColor = 'green';
            }
            if(legend === 'O'){
                td.style.backgroundColor = 'blue';

            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    return table;
}
Word.prototype.turn = function(){
    var acted = [];
    this.grid.forEach(function(critter, vector){
        if(critter.act && acted.indexOf(critter) == -1){
            acted.push(critter);
            this.letAct(critter,vector);
        }
    }, this);
}
Word.prototype.letAct = function(critter, vector){
    var action = critter.act(new View(this, vector));
    var handled = action &&
        action.type in actionTypes &&
        actionTypes[action.type].call(this, critter,
            vector, action);
    if (!handled) {
        critter.energy -= 0.2;
        if (critter.energy <= 0)
            this.grid.set(vector, null);
    }
}
Word.prototype.checkDestination = function(action,vector){
    if(directions.hasOwnProperty(action.direction)){
        var dest = vector.plus(directions[action.direction]);
        if(this.grid.isInside(dest)){
            return dest;
        }
    }
}
