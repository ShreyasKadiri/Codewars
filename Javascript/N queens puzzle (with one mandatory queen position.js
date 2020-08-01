let count = 0;
function queens(position, size) {
    const colomns = "abcdefghij";
    const rows = "1234567890";
    let [x, y] = position.split("");
    x = colomns.indexOf(x);
    y = rows.indexOf(y);
    const result = solve([x, y], size);
    return result.queens.map(([x, y]) => colomns[x] + rows[y]).join(',');
}

function solve(firstQueen, size) {
    let queens = new Map();
    const result = solveQueens(firstQueen, queens, size);
    queens = Array.from(queens);
    visalizeQueens(queens);
    console.log({ count });
    console.log(result);
    return { result, queens };
}

function solveQueens(candidate, queens, size) {
    console.log({ candidate });
    count++;

    for (const queen of queens) {
        if (isConflict(candidate, queen)) {
            return false;
        }
    }
    const [x, y] = candidate;
    queens.set(...candidate);
    for (let i = 0; i < size; i++) {
        if (queens.has(i)) continue;
        let find = false;
        for (let j = 0; j < size; j++) {
            if (solveQueens([i, j], queens, size)) {
                find = true;
                break;
            }
        }
        if (!find) {
            queens.delete(x);
            return false;
        }
    }
    return true;
}

function isConflict([x1, y1], [x2, y2]) {
    return y1 == y2 || x1 == x2 || y1 - x1 == y2 - x2 || y1 + x1 == y2 + x2;
}

function visalizeQueens(queens) {
    size = queens.length;
    array = Array(size).fill(0).map(a => Array(size).fill('.'));
    queens.forEach(([x, y]) => {
        array[y][x] = 'Q';
    });
    console.log(array.map(a => a.join(' ')).join('\n'));
}
