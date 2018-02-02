export default (state = null, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            // change colors starting from top left square
            const field = JSON.parse(JSON.stringify(state)),
                rows = field.length,
                cols = field[0].length,
                TLColor = field[0][0],
                newColor = action.payload;

            const visitedCells = [];
            for(let i = 0; i < rows; i++) {
                visitedCells[i] = [];
                for(let j = 0; j < cols; j++) {
                    visitedCells[i][j] = false;
                }
            }

            (function path(row, column) {
                if(!visitedCells[row][column]) {
                    visitedCells[row][column] = true;
                    field[row][column] = newColor;
                    const neighborCells = [
                        [row - 1, column],
                        [row + 1, column],
                        [row, column - 1],
                        [row, column + 1]
                    ];

                    neighborCells.forEach(elem => {
                        if(elem[0] < 0 || elem[1] < 0 || elem[0] >= rows || elem[1] >= cols) {
                            return false; // invalid cell
                        } else {
                            const r = elem[0],
                                c = elem[1];

                            if(field[r][c] === TLColor) {
                                // the neighbour cell is the same colour as the first cell
                                // change its colour to the new colour, and run the recursive function on it
                                field[r][c] = newColor;
                                path(r, c);
                            }
                        }
                    });
                }
            })(0, 0);

            return field;
        default:
            return state;
    }
}