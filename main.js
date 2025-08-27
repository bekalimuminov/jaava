let a = 3, b = 8;

for (let i = a; i <= b; i++) {
    console.log(i);
}

let narx = 12000;

for (let i = 1; i <= 10; i++) {
    console.log(`${i} kg = ${i * narx} so'm`);
}

let narx2 = 12000;

for (let i = 1; i <= 10; i++) {
    let w = i / 10;
    console.log(`${w} kg = ${w * narx2} so'm`);
}

let a1 = 3, b1 = 8;
let sum = 0;

for (let i = a1; i <= b1; i++) {
    sum += i;
}
console.log("Yig'indi =", sum)

let a2 = 3, b2 = 6;
let product = 1;

for (let i = a2; i <= b2; i++) {
    product *= i;
}
console.log("Ko'paytma =", product);

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

let matn = "ld22kje33herjbffnb234234fjhf34";
let raqamlar = "";

for (let i = 0; i < matn.length; i++) {
    if (!isNaN(matn[i]) && matn[i] !== " ") {
        raqamlar += matn[i];
    }
}
console.log("Faqat raqamlar:", raqamlar);