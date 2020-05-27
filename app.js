const sign = Deno.args[1];
const numberOne = parseInt(Deno.args[0]);
const numberTwo = parseInt(Deno.args[2]);

switch (sign) {
  case "+":
    console.log(numberOne + numberTwo);
    break;
  case "+":
    console.log(numberOne - numberTwo);
    break;

  default:
    break;
}
