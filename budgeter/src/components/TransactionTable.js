import React from "react";
import { Table, Button, Dropdown, Input } from "semantic-ui-react";

import TableUpdate from "./TableUpdate"
import TableNormal from "./TableNormal"

import * as utils from "../functions/utils"
import options from "../constants/options"

const TransactionTable = ({ props, deleteTransaction, updateTransaction, changeToUpdate, handleUpdateCategory, handleUpdateName, handleUpdateAmount }) => (
  <Table celled striped style={{marginTop: "12px"}} selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Category</Table.HeaderCell>
        <Table.HeaderCell>Transaction Name</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>Edit </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {props.transactions.map((transaction, key) => {
      if(props.editTransaction && props.clickedTransaction === key) {
        return(
            <TableUpdate
              transaction={transaction}
              key={key}
              props={props}
              deleteTransaction={() => deleteTransaction(key)}
              updateTransaction={() => updateTransaction(key)}
              handleUpdateCategory={handleUpdateCategory}
              handleUpdateName={handleUpdateName}
              handleUpdateAmount={handleUpdateAmount}
            />
          )
      } else {
        return(
          <TableNormal
            transaction={transaction}
            key={key}
            props={props}
            changeToUpdate={() => changeToUpdate(key)}
          />
        )}
      }
    )}
    </Table.Body>
  </Table>
)

export default TransactionTable
