// Your code here

Array.prototype.uniq = function () {
    let uniqArray = [];
    this.forEach(uniqInclude);

    function uniqInclude(ele) {
        if (!uniqArray.includes(ele)) {
            uniqArray.push(ele);
        }
    }
    return uniqArray;
};

// Array.prototype.twoSum = function () {
//     let sumsArray = [];
//     for (let i = 0; i < this.length - 1; i++) {
//         for (let j = 1; j < this.length - 1; j++) {
//             if (this[i] + this[j] === 0) {
//                 sumsArray.push([i, j]);
//             }
//         }
//     }
//       return sumsArray;  
// };

Array.prototype.twoSum = function () {
    let sumsArray = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = 1; j < this.length; j++) {
            if (this[i] + this[j] === 0 && j > i) {
                let pair = [];
                pair.push(i);
                pair.push(j);
                sumsArray.push(pair);    
            }
        }
    }
      return sumsArray;  
};

Array.prototype.transpose = function () {
    const rows = this.length, col = this[0].length;
    const grid = [];
    for (let j = 0; j < this.length; j++) {
        grid[j] = new Array(rows);
    }
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            grid[j][i] = this[i][j];
        }
    }
    return grid;
}