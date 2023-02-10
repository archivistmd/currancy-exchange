// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './CurrencyExchange';

// Business logic
async function getConversion(amount, fromCurr, toCurr) {
  const response = await CurrencyExchange.getConversion(amount, fromCurr, toCurr);
  if(response.result === "success") {
    printElements(response, amount, fromCurr, toCurr);
  } else {
    printError(response);
  }
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
  console.log(amount);
  console.log(fromCurr);
  console.log(toCurr);
  getConversion(amount, fromCurr, toCurr);
  // document.getElementById("converter-form").reset();
}

document.getElementById("converter-form").addEventListener("submit", handleFormSubmission);