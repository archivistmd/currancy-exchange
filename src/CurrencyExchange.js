export default class CurrencyExchange {

  static getConversion(amount, fromCurr, toCurr) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${fromCurr}/${toCurr}/${amount}`)
      .then(function(response) {
        if (!response.ok) {
          console.log(response)
          const errorMessage = `${response.status}`;
          throw new Error(errorMessage)
        } else {
          return response.json();
        }
      })
      .catch(function(error) {
        return error;
      });
  }
}