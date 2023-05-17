// Your code here

Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
       callback(this[i]);
    }
};

Array.prototype.myMap = function (cb) {
    let mapped = [];
    this.myEach(ele => {
        mapped.push(cb(ele));
    })
    return mapped;

};

function xfive(ele) {
    return ele * 5;
};

// Array.prototype.myReduce = function (callback, acc, el) {
//     acc = acc || this[0];
//     let sum = 0;
//     if (acc === this[0]){
//         sum -= this[0];
//     }
//     this.myEach(acc=> {
//         sum += el;
//     })
//     return sum;
// };


Array.prototype.myReduce = function (callback, initialValue) {
   let acc = initialValue

   this.myEach(acc =>
    function callback(acc, el) {

    })
};