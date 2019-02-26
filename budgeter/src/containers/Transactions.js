import React, { Component } from "react"
import { Segment, Container, Form, Button, Table, Header, Grid, Card, Sticky, Checkbox } from "semantic-ui-react"
import axios from "axios"

//Importing all needed components and files
import TransactionTable from "../components/TransactionTable"
import FormTransaction from "../components/FormTransaction"
import FormFilter from "../components/FormFilter"
import FormSort from "../components/FormSort"
import BalanceCard from "../components/BalanceCard"

import * as utils from "../functions/utils"
import options from "../constants/options.js"
import sortOptions from "../constants/sortOptions.js"

class Transactions extends Component {
  constructor(props){
    super(props)
    this.state = {
      transactions: [],
      filterCategory: "",
      newCategory: "",
      newName: "",
      newAmount: "",
      updateCategory: "",
      updateName: "",
      updateAmount: "",
      balance: 0,
      sortQuery:"",
      normalTrans: [],
      isRoman: "",
      editTransaction: false,
      clickedTransaction: ""
    }
  };

  componentWillMount() {
    //currBalance used to add the new balance with the current balance
    let currBalance = 0;
    axios.get("http://localhost:4000/api/transactions")
      .then(response => {
        currBalance = parseFloat(response.data.transactions.reduce((tot, arr) => {
         return (tot + arr.amount)
       },0)).toFixed(2);
        this.setState({
          transactions: response.data.transactions,
          balance: currBalance
        })
      })
      .catch(error => {
        console.log(error)
      });
  };

  //Used to keep right sided content stuck in place while scrolling
  handleContextRef = contextRef => this.setState({ contextRef }); size="small"

  //Handles the input of newCategory
  handleNewCategory = (event, data) => {
    this.setState({newCategory: data.value})
  };

  //Handles the input of newName
  handleNewName = (event) => {
    this.setState({newName: event.target.value})
  };

  //Handles the input of newAmount
  handleNewAmount = (event) => {
    this.setState({newAmount: event.target.value})
  };

  handleUpdateCategory = (event, data) => {
    this.setState({updateCategory: data.value})
  };

  //Handles the input of newName
  handleUpdateName = (event) => {
    this.setState({updateName: event.target.value})
  };

  //Handles the input of newAmount
  handleUpdateAmount = (event) => {
    this.setState({updateAmount: event.target.value})
  };

  //Handles the input of filterCategory
  handleFilterCategory = (event, data) => {
    this.setState({filterCategory: data.value})
  };

  //Handles the input of sortQuery
  handleSort = (event, data) => {
    this.setState({sortQuery: data.value})
  };

  //Handles submitting a new transaction into the database
  handleSubmit = (event) => {
    //finalAmount is used to set the number being sent to the database is positive or negative by checking if the category is income.
    let finalAmount = 0
    this.state.newCategory !== "Income" ? finalAmount = -this.state.newAmount : finalAmount = this.state.newAmount

    axios.post("http://localhost:4000/api/transactions", {
      headers: {"Content-Type": "application/json"},
        transactions: {
          category: this.state.newCategory,
          name: this.state.newName,
          amount: finalAmount,
        }
    })
    .then(response => {
      this.setState((prevState) => ({
        transactions: response.data.transactions,
        newCategory: "",
        newName: "",
        newAmount: "",
        balance: newBalance
        })
      )
    })
    //newBalance is the old balance plus the newBalance from the newly created transaction
    let newBalance = parseFloat(utils.createNewBalance(this.state.balance, finalAmount)).toFixed(2)
  };

  //Handles deleting a transaction from the database and updating the state to not display it.
  deleteTransaction = (key) => {
    let currTransaction = this.state.transactions[key]
    let id = currTransaction.id
    let newBalance = parseFloat(utils.createNewBalance(this.state.balance, -currTransaction.amount)).toFixed(2)

    axios.delete(`http://localhost:4000/api/transactions/${id}`)
    .then(response => {
      this.setState({
        transactions: response.data.transactions,
        balance: newBalance
      })
    })
  };

  updateTransaction = (key) => {
    let currTransaction = this.state.transactions[key]
    let id = currTransaction.id
    let uCat = this.state.updateCategory !== "" ? this.state.updateCategory : this.state.transactions[key].category
    let uName = this.state.updateName !== "" ? this.state.updateName : this.state.transactions[key].name
    let uAmt =  this.state.updateAmount !== "" ? this.state.updateAmount : this.state.transactions[key].amount

    if(uCat !== "Income"){
      uAmt *= -1
    }

    let updatedBalance = parseFloat(utils.updateBalance(this.state.balance, -currTransaction.amount, uAmt)).toFixed(2)

      axios.put(`http://localhost:4000/api/transactions/${id}`, {
        headers: {"Content-Type": "application/json"},
          transactions: {
            category: uCat,
            name: uName,
            amount: uAmt,
          }
      })
      .then(response => {
        this.setState({
          transactions: response.data.transactions,
          editTransaction: false,
          balance: updatedBalance,
          clickedTransaction: "",
          updateName: "",
          updateCategory: "",
          updateAmount: "",
        })
      })
  }

  //Sort transactions depending on what sort you choose.
  sortTransactions = () => {
    let sortedTrans =[]
    if(this.state.sortQuery === "Lowest"){
      sortedTrans = this.state.transactions.sort((a, b) => {
        let amtA = a.amount
        let amtB = b.amount
        //this takes the amounts and compares them and returns the lower one first.
        if(amtA < amtB) return -1;
        if(amtA > amtB) return 1;
        return 0;
      })
      this.setState({
        transactions: sortedTrans
      })
    } else if(this.state.sortQuery === "Highest"){
      sortedTrans = this.state.transactions.sort((a, b) => {
        let amtA = a.amount
        let amtB = b.amount
        //this takes the amounts and compares them and returns the higher one first.
        if(amtA < amtB) return 1;
        if(amtA > amtB) return -1;
        return 0;
      })
      this.setState({
        transactions: sortedTrans
      })
    };
  };

  //This resets the filter that was done, it takes a previous version of the state and puts it as current.
  resetFilter = () => {
    this.setState({
      transactions: this.state.normalTrans,
    })
  };

  //This filters the transactions by taking an input of category and filtering out any that dont have that category
  filterTransactions = (category) => {
    //This checks if there is already a previos state saved which will always be bigger than the filtered state,
    //if there is no previous state saved, it will save it as normalTrans
    if(this.state.transactions.length > this.state.normalTrans.length) {
      this.setState({
        normalTrans: this.state.transactions,
      })
    };
    let filteredTrans = this.state.transactions.filter(transaction => {
      return transaction.category === category
    })
    this.setState({
      transactions: filteredTrans
    })
  };


//Handles the onChange of the toggle for making the numbers roman numerals
onChange = () => {
  this.setState({ isRoman: !this.state.isRoman})
}

//Changes the status of the transaction to update so you can update the fields.
changeToUpdate = (id) => {
  this.setState({ editTransaction: true, clickedTransaction: id})
  console.log(this.state.clickedTransaction)
}

render() {
  const isInvalid =
    this.state.newName === "" ||
    this.state.newCategory === "" ||
    this.state.newAmount === "";

  const { contextRef } = this.state


  return(
    <Container>
      <div ref={this.handleContextRef}>
        <Grid divided="vertically" stackable>
          <Grid.Row columns={2}>
            <Grid.Column width="12" floated="left">
              <TransactionTable
                props={this.state}
                changeToUpdate={this.changeToUpdate}
                deleteTransaction={this.deleteTransaction}
                updateTransaction={this.updateTransaction}
                handleUpdateCategory={this.handleUpdateCategory}
                handleUpdateName={this.handleUpdateName}
                handleUpdateAmount={this.handleUpdateAmount}
              />
            </Grid.Column>
            <Grid.Column width={4} floated="right">
              <Sticky context={contextRef}>
                <div style={{paddingTop: "12px"}}>
                  <BalanceCard props={this.state} onChange={this.onChange} />
                  <Segment raised >
                    <Header as="h4"> Add Transaction </Header>
                      <FormTransaction
                        props={this.state}
                        handleSubmit={this.handleSubmit}
                        handleNewCategory={this.handleNewCategory}
                        handleNewName={this.handleNewName}
                        handleNewAmount={this.handleNewAmount}
                        isInvalid={isInvalid}
                      />
                    <Header as="h4"> Filter </Header>
                      <FormFilter
                        props={this.state}
                        handleFilterCategory={this.handleFilterCategory}
                        filterTransactions={this.filterTransactions}
                        resetFilter={this.resetFilter}
                      />
                    <Header as="h4"> Sort By </Header>
                      <FormSort
                        props={this.state}
                        handleSort={this.handleSort}
                        sortTransactions={this.sortTransactions}
                      />
                  </Segment>
                </div>
              </Sticky>
            </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Container>
    )
  }
}

export default Transactions;
