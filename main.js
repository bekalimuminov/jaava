//     return Math.floor(n / 10) + (n % 10);
// }
// console.log(integer7(57)); // 12
//
// function integer8(n) {
//     return (n % 10) * 10 + Math.floor(n / 10);
// }
// console.log(integer8(57)); // 75
//
// function integer9(n) {
//     return Math.floor(n / 100);
// }
// console.log(integer9(345)); // 3
//
// function integer10(n) {
//     return { units: n % 10, tens: Math.floor((n % 100) / 10) };
// }
// console.log(integer10(345)); // {units:5, tens:4}
//
// function integer11(n) {
//     return Math.floor(n / 100) + Math.floor((n % 100) / 10) + (n % 10);
// }
// console.log(integer11(345)); // 12
//
// function integer12(n) {
//     return (n % 10) * 100 + Math.floor((n % 100) / 10) * 10 + Math.floor(n / 100);
// }
// console.log(integer12(345)); // 543
//
// function integer13(n) {
//     return (n % 100) * 10 + Math.floor(n / 100);
// }
// console.log(integer13(345)); // 453
//
// function integer14(n) {
//     return (n % 10) * 100 + Math.floor(n / 10);
// }
// console.log(integer14(345)); // 534
//
// function integer15(n) {
//     return Math.floor((n % 100) / 10) * 100 + Math.floor(n / 100) * 10 + (n % 10);
// }
// console.log(integer15(123)); // 213