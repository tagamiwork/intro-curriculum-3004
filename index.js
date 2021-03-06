'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
}

function multi(numbers) {
    let result = 1;
    for (let num of numbers) {
        result *= num;
    }//for
    return result;
}//multi()

module.exports = {
    add: add,
    multi: multi
};

const assert = require('assert');
assert.equal(add([1,2,3,4]), 10, `error:値が違います　出力された値：${add([1,2,3,4])}`);
assert.equal(multi([1,2,3,4]), 24, `error:値が違います　出力された値：${multi([1,2,3,4])}`);
console.log('すべてのテストを通過しました');