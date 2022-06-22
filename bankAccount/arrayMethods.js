const arr = ["a", "b", "c", "d", "e"];

// const len = arr.length;
// console.log(arr[len - 1]);

for (let i = 0; i < arr.length; i++) {
  console.log(`The letter at index ${i} is ${arr[i]}`);
}

let total = 0;

for (let i = 1; i <= 10; i++) {
  total += i;
}

console.log(total);

count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}

// console.log(total);
