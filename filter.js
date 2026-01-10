

Array.prototype.myFilter = function(callback) {
    if(typeof callback != "function") {
        throw new TypeError("Its not a function");
    }

    let temp = [];

    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            temp[temp.length] = this[i]
        }
    }        

    return temp;
}; 

const arr = [1,23,4];
const newArr = arr.myFilter((elem) => elem % 2 == 0);
console.log(arr, newArr);


