var n = 4;
var results = [];
for (var i = 0; i < n; i++) {
    results.push([]);
}
let counter = 1;
let sRow = 0;
let eRow = n - 1;

let sCol = 0;
let eCol = n - 1;
while (sCol <= eCol && sRow <= eRow) {
    // top row
    for (let i = sCol; i <= eCol; i++) {
        results[sRow][i] = counter;
        counter++;
    }
    sRow++;
    // right column
    for (let i = sRow; i <= eRow; i++) {
        results[i][eCol] = counter;
        counter++;
    }
    eCol--;
    // bottom row
    for (let i = eCol; i >= sCol; i--) {
        results[eRow][i] = counter;
        counter++;
    }
    eRow--;
    // start column
    for (let i = eRow; i >= sRow; i--) {
        results[i][sCol] = counter;
        counter++;
    }
    sCol++;
}
console.log(results);
