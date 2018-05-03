let arr = process.argv;

arr.shift();

arr.shift();

let result = 0;

for(let i of arr) {
result = result + Number(i);
}

console.log(result);
