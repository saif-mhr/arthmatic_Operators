var a, b, c;
a = 36;
b = 5;
c = a + b;
console.log('Addition ' + c);
c = a - b;
console.log('Substraction ' + c);
c = a * b;
console.log('Multiplication ' + c);
c = a / b;
console.log('Devision ' + c);
function add(a, b) {
    console.log('addition ' + (a + b));
}
add(2, 3);

function multi(first, last) {
    console.log('Multi ' + (first * last))
}
multi(2, 4);
//non return type or void function
function devide(firstV, lastV) {
    console.log('Devide ' + (firstV / lastV));
}
devide(2, 3);
//return type function
function mult(a, b) {
    return (a * b);
}
console.log('muktiplication ' + mult(2, 3));