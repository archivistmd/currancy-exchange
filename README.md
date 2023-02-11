# _CURRENCY EXCHANGE_

#### By _**Mesha Devan**_

#### _An independent project done for Epicodus that allows the user to enter an amount of money from a specified currency of their choosing and convert it to another._

https:// link

## Technologies Used

* _Bootstrap_
* _CSS_
* _Git_
* _HTML_
* _JavaScript_
* _Markdown_
* _Babel_
* _DotEnv_
* _node.js_
* _eslint_
* _Jest_
* _webpack_
* _Currency Exchanger API_

## Description

The webpage utilizes an API call in order to convert currency with over 160 supported currencies for the user to choose from by a drop-down list.

The user enters the numerical value of the currency they're wishing to convert (ex. 30 USD) and when they click the convert button, it shows the amount in the new currency.

To see the live page [click here](https://archivistmd.github.io/currency-exchange)

## Setup/Installation Requirements

**Please note this application requires an API key to function**

* Clone this repository to your desktop.
* Click here to navigate to [the currency exchange API](https://www.exchangerate-api.com/)
* Locate the button at the top right corner that says _Get Free Key_.
* Enter your email address & a password and click _Accept Terms & Create API Key_.
* You will then be taken to a page titled "Dashboard" that displays your API key under a section called API Access. Copy this entire key as this will be the text you input in your .env file.

* Navigate to the top level of this cloned directory in your computer's terminal.
* Create a file named ".env" in the top level of this directory
* In the text of the .env file, include API_KEY={your API key} where {your API key} is replaced with the actual numbers of your API key.
* Install all packages with $ npm install.
* Build the project using webpack with $ npm run start.


## Known Bugs

* Page resets without displaying results.
* Page doesn't seem to be calling on API consistently.
* Page isn't displaying proper CSS styling at all times.

## MIT License

Copyright (c) [2023] [Mesha Devan]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
