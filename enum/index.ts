enum Direction {
    LEFT,
    RIGHT,
    UP,
    DOWN
}
function move(direction){
    console.log(`moveing ${Direction[direction].toLowerCase()}`); 
}
move(Direction.UP);