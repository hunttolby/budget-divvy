import React from "react"
import { Table, Input, Dropdown, Button } from "semantic-ui-react";

import options from "../constants/options"

const TableUpdate = ({transaction, key, props, deleteTransaction, updateTransaction, handleUpdateCategory, handleUpdateName, handleUpdateAmount }) => (
  <Table.Row key={key}>
    <Table.Cell width="3">
      <Dropdown
        options={options}
        selection
        placeholder={transaction.category}
        value={props.updateCategory}
        onChange={handleUpdateCategory.bind(this)}
      />
    </Table.Cell>
    <Table.Cell>
      <Input
        placeholder={transaction.name}
        value={props.updateName}
        onChange={handleUpdateName.bind(this)}
      />
    </Table.Cell>
    <Table.Cell collapsing textAlign='right'>
      <Input
        placeholder={transaction.amount}
        value={props.updateAmount}
        type="number"
        onChange={handleUpdateAmount.bind(this)}
      />
    </Table.Cell>
    <Table.Cell collapsing>
      <Button.Group>
        <Button color="green" inverted compact onClick={()=> updateTransaction(key)}>
          Save
        </Button>
        <Button color="red" inverted compact onClick={()=> deleteTransaction(key)}>
          Delete
        </Button>
      </Button.Group>
    </Table.Cell>
  </Table.Row>
)

export default TableUpdate
