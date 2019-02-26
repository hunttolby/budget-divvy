# Divvy Project
A full CRUD budgeting web app built for an interview with Divvy App.
Over the course of this project, I learned the basics of Elixir with Phoenix and setting up an SQL server with them and cleaner way to write some React. Overall this project was a blast!

### Prerequisites
You will need to install Elixir, Hex, Phoenix, and Node to run this project. We will install Hex and Phoenix later.

To install Elixir, go to the link below.

[Elixir Install Guide](https://elixir-lang.org/install.html)

To install Node, go to the link below.

[Node Install](https://nodejs.org/en/download/)


### Installing Dependencies

To install Hex, open up the folder in Terminal/Command Prompt, and change directories into..

`cd phx_budget`

Then install Hex by running..

`mix local.hex`

Then install Phoenix by running..

`mix archive.install hex phx_new 1.4.1`

Now for any dependencies needed with the server run

`mix deps.get`

Great, the back end server is ready to go! In the same folder (phx-budget), get it started by running..

`mix phx.server`

Now in a seperate Terminal/Command Prompt, change directories into..

`cd budgeter`

Then install dependencies by running ..

`npm install`

Awesome! In the same folder load the front end server by running..

`npm start`

There you go! Using the side bar on the right, add transactions with different types of categories and amounts. Click anywhere on the transaction, or on the edit, to make changes to the transaction! Filter or sort the transaction from Lowest to Highest, or by a certain category!

### Technologies
- React
- Semantic UI
- Axios
- Elixir
- Phoenix
- PostgreSQL
