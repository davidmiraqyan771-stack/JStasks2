Array.prototype.myEvery = function(callback) {
    if(typeof callback != "function") {
        throw new TypeError("Its not a function");
    }

    for(let i = 0; i < this.length; i++) {
        if(!callback(this[i], i, this)) {
            return false;
        }
    }        

    return true;
}; 

const arr = [6, 1, 4];
const test = arr.myEvery((elem) => elem % 2 == 0);
console.log(test);


