// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './CurrencyExchange';

// Business logic
function getConversion(amount, fromCurr, toCurr) {
  CurrencyExchange.getConversion(amount, fromCurr, toCurr)
    .then(function(response) {
      if(response.result) {
        printElements(response, amount, fromCurr, toCurr);
      } else {
        printError(response);
      }
    });
}

// UI logic

function printElements(response, amount, fromCurr, toCurr) {
  let div = document.getElementById("display-result");
  div.innerText = null;
  div.innerText = `${amount} ${fromCurr} = ${response.conversion_result} ${toCurr}`;
}

function printError(response) {
  document.getElementById("display-result").innerText = `Apologies, there was an error in converting your currency: ${response}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const amount = document.getElementById("conversion-amount").value;
  const fromCurr = document.getElementById("starting-unit").value;
  const toCurr = document.getElementById("converting-to").value;
  console.log(amount)
  console.log(fromCurr)
  console.log(toCurr)
  getConversion(amount, fromCurr, toCurr);
  // document.getElementById("converter-form").reset();
}

document.getElementById("converter-form").addEventListener("submit", handleFormSubmission);