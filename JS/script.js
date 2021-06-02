function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

$(document).ready(function () {
  $(".add").click(function (event) {
  event.preventDefault();
  const number1 = parseInt($("#num1").val());
  const number2 = parseInt($("#num2").val());
  const result = add(number1, number2);
  $("#output").text(result);
});
$(".subtract").click(function (event) {
  event.preventDefault();
  const number1 = parseInt($("#num1").val());
  const number2 = parseInt($("#num2").val());
  const result = subtract(number1, number2);
  $("#output").text(result);
});
$(".multiply").click(function (event) {
  event.preventDefault();
  const number1 = parseInt($("#num1").val());
  const number2 = parseInt($("#num2").val());
  const result = multiply(number1, number2);
  $("#output").text(result);
});
$(".divide").click(function (event) {
  event.preventDefault();
  const number1 = parseInt($("#num1").val());
  const number2 = parseInt($("#num2").val());
  const result = divide(number1, number2);
  $("#output").text(result);
});
});




// beverage below
const beverage = $("#beverage").val();

// Radio button
const flavor = $("input:radio[name=flavor]:checked").val();
// Date
const dob = $("#born").val();
// Color
const favoriteColor = $("#color").val();