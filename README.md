# ECommerce Backend


## Description

This project aims to create a backend for a generic e-commerce website. It utilizes Express.js and Sequelize to interact with a PostgreSQL database. The manager of the fictional ecommerce site can view products and categories of the items in their store for tracking and managing their goods.

## Table of Contents

[Installation](#installation)

[Usage](#usage)

[Collaborators](#collaborators)

[Questions](#questions)

[License](#license)

## Installation

clone the repository to your current machine. 

once cloned, open the 'server.js' file in the terminal and run the command 'npm i' to install all necessary npm packages. 

Next, launch postgreSQL by typing 'psql -U postgres' in your terminal and enter your password. 

after succesfully logging in, run the command '\i db/schema.sql' to initialize your database and then run '\q' to quit postgreSQL. 

afterwards, run the command 'node seed/index.js' to seed or populate your database (note, you may need to create/update your .env file to include DB_NAME, DB_USER, 

and DB_PASSWORD to run. please ensure your .env file is in your root directory)

finally, run 'node server.js' to run your application. if you have any questions, please reference the video below.

## Usage

https://youtu.be/plcnHCr3aDY

once running, open up an instance of Insomnia and run basic CRUD commands to ensure the functionality of the application.

## Test

n/a

## Collaborators

n/a

## Questions

Github profile: (https://github.com/anduhrooo)

Please direct any questions to yang.andrew7@gmail.com

## License

N/A
