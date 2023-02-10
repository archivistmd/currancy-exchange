export default class CurrencyExchange {

  static async getConversion(amount, fromCurr, toCurr) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${fromCurr}/${toCurr}/${amount}`);
      const jsonResponse = await response.json();
      if (!response.ok) {
        console.log(response);
        const errorMessage = `${response.status}`;
        throw new Error(errorMessage)
      } else {
        return response.json();
      }
      return jsonResponse;
    } catch(error) {
      return error;
    };
  }
}