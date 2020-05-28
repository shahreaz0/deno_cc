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

const app = {
  no: false,
  yes: true,
};

const play = ["cricket", "football", "golf"];

for (const x of play) {
  console.table(play);
}

console.error("name");
