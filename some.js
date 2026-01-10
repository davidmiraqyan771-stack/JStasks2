Array.prototype.mySome = function(callback) {
    if(typeof callback != "function") {
        throw new TypeError("Its not a function");
    }

    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            return true;
        }
    }        

    return false;
}; 

const arr = [7, 13, 3];
const test = arr.mySome((elem) => elem % 2 == 0);
console.log(test);


