var multiply = function (num1, num2) {
  if (typeof num1 !== "number") {
    return "Please provide numbers only";
  } else if (typeof num2 !== "number") {
    return "Please provide numbers only";
  }
  return num1 * num2;
};
console.log(multiply(13, 52));
console.log(multiply(52253450, 2934));
