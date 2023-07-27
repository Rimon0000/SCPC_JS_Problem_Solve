function calculator(number1, number2, operator) {
    let result;
    switch (operator) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      case "/":
        result = number1 / number2;
        break;
      default:
        throw new Error("Invalid operator");
    }
    return result;
  }
  
  console.log(calculator(5, 2, "+"));
  console.log(calculator(5, 2, "-"));
  console.log(calculator(5, 2, "*"));
  console.log(calculator(6, 2, "/"));