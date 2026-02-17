// loops -- repeating code blocks
// 1 1 1  1 1  1 1
// 1 2 3 4 5 6 7 8 9 10

// kaya thi javanu chhe --> kaya sudhi javanu chhe --> kevi rite javanu chhe
// for (ex. 1 -> 50 -> increment by 1)

// kaya thi javanu chhe --> Kaya rokavanu chhe --> Kevi rite javanu chhe
// while (ex. 1 -> Hello world -> stop when condition false)

// for loop
// why use for loop? when you know how many times you want to repeat a block of code.
// print 1 to 10 --> console.log(1); console.log(2); ... console.log(10);
// print 1 to 100

// for(start; end; change){}
for (let i = 1; i < 101; i++) {
  // console.log("Hello");
  console.log(i);
}

for (let i = 0; i < 20; i++) {
  console.log(5);
}



// while loop
// start
// while(end){
// code
// change
// }
let i = 1;
while (i < 15) {
  console.log(i);
  i++;
}

// do while loop
// do {} while (end);
// start
// do{
// code
// change}
// while(end);
let j = 12;
do {
  console.log(j);
  j++;
} while (j < 10); // while check after executing code block

// break
for (let k = 1; k <= 201; k++) {
  console.log(k);
  if (k === 32) {
    break;
  }
}


// continue
for (let a = 1; a <= 201; a++) {
  if (a === 32) {
    continue;
  }
  console.log(a);
}


// for-of, forEach for Arrays 
// for-in for Objects

