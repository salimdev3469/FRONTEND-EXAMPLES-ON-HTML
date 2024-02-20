const firstinput = document.querySelector(".input1");
const secinput = document.querySelector(".input2");
const thirdinput = document.querySelector(".input3");
const fourthinput = document.querySelector(".input4");

const resultElement = document.querySelector(".result");

const calc = document.querySelector(".btn");

const operand = document.querySelector(".selection");

calc.addEventListener("click", () => {
    const var1 = parseFloat(firstinput.value) / parseFloat(secinput.value); //parseFloat converts value to the float type
    const var2 = parseFloat(thirdinput.value) / parseFloat(fourthinput.value);

    switch (operand.value) {
        case '+':
            resultElement.textContent = `Result: ${var1 + var2}`;//updates the inner value of the label tag which have result class, doesnt look inside value inside of the html
            resultElement.classList.add("display");
            break;
        case '/':
            resultElement.classList.add("display"); //doesnt matter the orders of commands, it works
            resultElement.textContent = `Result: ${var1 / var2}`;
            break;
        case '-':
            resultElement.textContent = `Result: ${var1 - var2}`;
            resultElement.classList.add("display");
            break;
        case '*':
            resultElement.textContent = `Result: ${var1 * var2}`;
            resultElement.classList.add("display");
            break;
        default:
            resultElement.textContent = "Invalid Operand";
            resultElement.classList.add("display");
            break;
    }
});
