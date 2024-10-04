/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a] [+] [+b++] [+] [+c++] [-] [+a++]

  [++a]
  - Value: 11
  - Explain: pre increment

  [+]
  - Explain: addition

  [+b++]
  - Value: 20
  - Explain: unary plus and post increment

  [+]
  - Explain: addition

  [+c++]
  - Value: 80
  - Explain: unary plus and post increment
   
  [-]
  - Explain: subtraction

  [+a++]
  - Value: 10
  - Explain: unary plus and post increment 

  out put: 100
*/
/*
  [++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]

  [++a]
  - Value: 11
  - Explain: pre increment

  [+]
  - Explain: addition

  [-b]
  - Value: -20
  - Explain: unary negation

  [+c++]
  - Value: 80
  - Explain: unary plus and post increment

  [-]
  - Explain: subtraction

  [-a++]
  - Value: -10
  - Explain: post increment and unary negation

  [+a]
  - Value: 10
  - Explain: unary plus

    Output: 100
*/
/*
  [--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [a] [--a] [+true]

  [--c]
  - Value: 79
  - Explain: pre dicrement

  [+]
  - Explain: addition

  [+b]
  - Value: 20
  - Explain: unary plus

  [--a]
  - Value: 9
  - Explain: pre dicrenent

  [*]
  - Explain: multiplication

  [+b++]
  - Value: 20
  - Explain: post increment and unary plus

  [-]
  - Explain: subtraction

    [+b]
  - Value: 20
  - Explain: unary plus

  [a]
  - Value: 10

  [--a]
  - Value: 9
  - Explain: pre dicrement

  [+true]
  - Value: 1
  - Explain: unary plus

    Output: 100
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(+d * -e ); // 2000
console.log(++e * ++g + -d + ++f); // 173