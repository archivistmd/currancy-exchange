export default class CurrencyExchange {

  static getConversion(amount, fromCurr, toCurr) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${fromCurr}/${toCurr}/${amount}`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status}`;
          throw new Error(errorMessage)
        } else {
          return response.json();
        }
      })
      .catch(function(errorMessage) {
        return errorMessage;
      });
  }
}