# Divvy Project
A full CRUD budgeting web app built for an interview with Divvy App.
Over the course of this project, I learned the basics of Elixir with Phoenix and setting up an SQL server with them and cleaner way to write some React. Overall this project was a blast!

### Prerequisites
You will need to install Elixir, Hex, Phoenix, Node, and PostgreSQL to run this project. We will install Hex and Phoenix later.

To install Elixir, go to the link below.

[Elixir Install Guide](https://elixir-lang.org/install.html)

To install Node, go to the link below.

[Node Install](https://nodejs.org/en/download/)

To install PostgreSQL, go to the link below and download the binary package for your OS

[PostgreSQL Install](https://www.postgresql.org/download/)

Following the EnterpriseDB installer and install postgres 11.

For the USERNAME and PASSWORD set them as

`postgres`

Leave the port as

`5432`

###### Note : If you have postgres installed already and have a different username/password, you will need to navigate to

`phx_budget/config/devs.exs`

###### And change Line 71 and 72 to your local postgres username/password


### Installing Dependencies

To install Hex, open up the folder in Terminal/Command Prompt, and change directories into..

`cd phx_budget`

Then install Hex by running..

`mix local.hex`

Then install Phoenix by running..

`mix archive.install hex phx_new 1.4.1`

Now for any dependencies needed with the server run

`mix deps.get`

Then get node dependencies

`cd assets && npm install`

Then navigate back to the phx_budget folder

`cd ..`

Now we need the postgres database built. Build it by running..

`mix ecto.setup`

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
