// let maze = [     [" ", " ", " "],
//                  [" ", "*", " "],
//                  [" ", " ", "e"],
//                                  ];
  

let maze = [
    [' ', ' ', ' ', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*'],
    ['*', '*', ' ', '*', ' ', '*', ' ', '*', ' ', '*'],
    [' ', ' ', ' ', '*', ' ', '*', ' ', '*', ' ', '*'],
    [' ', '*', '*', '*', ' ', ' ', ' ', '*', ' ', '*'],
    [' ', ' ', ' ', ' ', ' ', '*', '*', ' ', ' ', '*'],
    [' ', '*', '*', ' ', ' ', '*', '*', ' ', ' ', '*'],
    [' ', ' ', ' ', '*', '*', ' ', '*', '*', ' ', ' '],
    ['*', '*', ' ', '*', '*', ' ', ' ', ' ', ' ', '*'],
    ['*', '*', '*', '*', '*', '*', '*', ' ', ' ', 'e'],
];

// start point is at maze[0][0], end point is "e"
// a valid location is " " and not mines, 
// we have to stay in bounds maze[0][-1]

//base case did we hit the end
// are we in bounds, not on mines
// move left, up, right, down



function mazeSolver(maze, position = [0, 0], path = '') {
    // Get current row and column
    let row = position[0];
    let col = position[1];
  
    if (/*check if we are in bounds of the maze and we are not hitting a mine*/) {
        return;
    }

    if (/*check if the current position is exit*/) {
        // path will give us our directional input in the form of R L U D
        return path;
    }
  
    // Mark the current cell as visited
    maze[row][col] = '*';
    //initialize a result variable
    let result = '';
    // Recursively call the function to explore all possible directions
    result = mazeSolver(maze, /*explore the left side*/, /*mark down which direction we went*/); // left
    //if the direction is invalid result gets set to undefined....if truthy keep going and if falsy check other directions
    if (result) return result;
    result = mazeSolver(maze, /*explore the north side*/, /*mark down which direction we went*/); // up
    if (result) return result;
    result = mazeSolver(maze, /*explore the right side*/, /*mark down which direction we went*/); // right
    if (result) return result;
    result = mazeSolver(maze, /*explore the south side*/, /*mark down which direction we went*/); // down
    if(result) return result
    // Backtrack by unmarking the current cell
    maze[row][col] = ' ';
}


console.log(mazeSolver(maze))
console.table(maze)