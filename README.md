# E-commerce Back End Starter Code
Internet retail, also known as e-commerce, is the largest sector of the electronics industry, having generated an estimated US$29 trillion in 2017 (Source: United Nations Conference on Trade and Development). E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.

## Description

The project demonstrates the functionality of the back end for an e-commerce site. Project utilizes Express.js API, configures it to use Sequelize to interact with a MySQL database.

## Table of Contents

  [Title](#title)

  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [License](#license)

  [Contributing](#contributing)

  [Questions](#questions)

## Installation

Step 1: clone GitHub repository, for that run the following command from the command line prompt (make sure you navigate to the directory of your choice before start cloning): git clone https://github.com/vasilyl1/orm-be-ecommerce

Step 2: navigate to the cloned repositary directory, for that run: cd orm-be-ecommerce

Step 3: install the libraries required by the application by running: NPM install

Step 4: make sure mySQL is installed on your machine

Step 5: Create the development database and seed the data, for that steps using
mySQL server, run source schema.sql from /db directory, once the database has been created run node index.js from /seeds directory - this will create tables and seed the test data into the database.

Step 6: in the app root directory, create .env configuration file. Add and define the following variables:

DBhost=localhost
DB_USER=root
DB_PW=
DB_NAME=ecommerce_db

Step 6: connect to your database and launch the express.js server by starting the following command from your project directory: npm start

## Usage

Please refer to the video below which demonstrates the use of API (Insomnia tool has been used to correctly demonstrate GET, POST, PUT and DELETE requests):

https://watch.screencastify.com/v/fzJCImHrKPzZAdnpbbcY


## Credits

Node.js
Inquirer
mySQL
Sequelize
DotEnv

## License

MIT License

Copyright (c) 2022 vasilyl1

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributing

vl1
  
## Questions

My GitHub name is vl1. Most of the answers to the questions can be found there, here is the link to my profile at GitHub:

https://github.com/vl1

For additional questions please e-mail to likhovaido@gmail.com

Thank you for your interest in this app.
