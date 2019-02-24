import React from "react";

import { Table, Button } from "semantic-ui-react";

import * as utils from "../functions/utils"

const TransactionTable = ({ props, deleteTransaction }) => (
  <Table celled striped style={{marginTop: "12px"}}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Category</Table.HeaderCell>
        <Table.HeaderCell>Transaction Name</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell/>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {props.transactions.map((transaction, key) => {
      return(
          <Table.Row key={key} >
            <Table.Cell width="3"> {transaction.category} </Table.Cell>
            <Table.Cell> {transaction.name} </Table.Cell>
            <Table.Cell collapsing textAlign='right'>
              <span style={{color: transaction.amount < 0 ? "#ff695e" : "#21ba45"}}>{utils.romanMaker(transaction.amount, props.isRoman)}</span>
            </Table.Cell>
            <Table.Cell width="1" textAlign="center" collapsing>
              <Button color="red" circular compact onClick={()=> deleteTransaction(key)}>
                Delete
              </Button>
            </Table.Cell>
          </Table.Row>
        )
      }
    )}
    </Table.Body>
  </Table>
)

export default TransactionTable
